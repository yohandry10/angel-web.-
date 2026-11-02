import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

// Variables de entorno (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY   clave de Resend (obligatoria)
//   CONTACT_TO       destino de los mensajes (opcional, por defecto operaciones@nextelco.cloud)
//   CONTACT_FROM     remitente; su dominio debe estar verificado en Resend
const DEFAULT_TO = "operaciones@nextelco.cloud";
const DEFAULT_FROM = "NEXTELCO Web <web@nextelco.cloud>";

// Quita saltos de línea para que nadie inyecte cabeceras en el asunto.
const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ").trim();

// Límite por IP: 5 envíos cada 10 minutos. Es en memoria, así que cada instancia
// de servidor lleva su cuenta; frena ráfagas, no a un atacante con muchas IP.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function overLimit(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().min(10).max(1000),
  // Campo trampa: los humanos no lo ven; los bots suelen rellenarlo.
  website: z.string().max(500).optional().default(""),
});

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "desconocida";
        if (overLimit(ip)) {
          return Response.json({ ok: false, error: "Demasiados envíos. Inténtalo más tarde." }, { status: 429 });
        }

        let data: z.infer<typeof schema>;
        try {
          const parsed = schema.safeParse(await request.json());
          if (!parsed.success) {
            return Response.json({ ok: false, error: "Revisa los datos del formulario." }, { status: 400 });
          }
          data = parsed.data;
        } catch {
          return Response.json({ ok: false, error: "Solicitud no válida." }, { status: 400 });
        }

        // Bot detectado: respondemos como si todo fuera bien, sin enviar nada.
        if (data.website) return Response.json({ ok: true });

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          console.error("RESEND_API_KEY no está configurada");
          return Response.json({ ok: false, error: "No pudimos enviar el mensaje. Escríbenos a operaciones@nextelco.cloud." }, { status: 503 });
        }

        const subject = oneLine(`[Proyecto] ${data.name}${data.company ? " · " + data.company : ""}`);
        const text = `${data.message}\n\n— ${data.name}\n${data.email}${data.company ? "\n" + data.company : ""}`;

        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: process.env.CONTACT_FROM || DEFAULT_FROM,
              to: [process.env.CONTACT_TO || DEFAULT_TO],
              reply_to: data.email,
              subject,
              text,
            }),
          });
          if (!res.ok) {
            console.error("Resend respondió", res.status, await res.text());
            return Response.json({ ok: false, error: "No pudimos enviar el mensaje. Inténtalo de nuevo." }, { status: 502 });
          }
        } catch (err) {
          console.error("Error al llamar a Resend", err);
          return Response.json({ ok: false, error: "No pudimos enviar el mensaje. Inténtalo de nuevo." }, { status: 502 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SitePageHeader } from "@/components/SiteChrome";
import "@/components/SupportingPages.css";
import { SITE_URL, pageMeta } from "@/lib/seo";

const TITLE = "Política de privacidad — NEXTELCO SAC";
const DESC =
  "Cómo NEXTELCO SAC trata tus datos personales y cómo ejercer tus derechos según la Ley 29733.";

export const Route = createFileRoute("/privacidad")({
  component: Privacidad,
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESC, path: "/privacidad" }),
    links: [{ rel: "canonical", href: `${SITE_URL}/privacidad` }],
  }),
});

function Privacidad() {
  return (
    <div className="site-theme legal-page">
      <SitePageHeader label="Privacidad" />
      <main className="legal-content space-y-8 leading-relaxed">
        <h1 className="text-4xl font-semibold tracking-tight">Política de privacidad</h1>
        <p className="text-sm text-muted-foreground">
          Última actualización: 2 de noviembre de 2026
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Responsable del tratamiento</h2>
          <p>
            NEXTELCO SAC, RUC 20616053575, Perú. Correo para temas de datos personales:{" "}
            <a className="underline" href="mailto:operaciones@nextelco.cloud">
              operaciones@nextelco.cloud
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Datos que recogemos</h2>
          <p>
            Solo tratamos los datos que nos envías voluntariamente a través del formulario de
            contacto:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre y correo electrónico.</li>
            <li>Empresa (opcional).</li>
            <li>El mensaje que escribes.</li>
          </ul>
          <p>No pedimos datos sensibles ni documentos de identidad a través del sitio.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Finalidad</h2>
          <p>
            Usamos esos datos para responder tu consulta, coordinar una demo o una propuesta
            comercial y, si contratas, gestionar la relación comercial.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Base legal</h2>
          <p>
            El tratamiento se basa en tu consentimiento, que otorgas al enviar el formulario, y en
            las medidas precontractuales que solicitas.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Proveedores que procesan tus datos</h2>
          <p>Tus datos pasan por proveedores que nos prestan servicios técnicos:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Vercel</strong>, que aloja el sitio.
            </li>
            <li>
              <strong>Resend</strong>, que envía el correo del formulario a nuestro buzón.
            </li>
            <li>
              <strong>Zoho</strong>, que recibe y guarda ese correo en nuestro buzón.
            </li>
            <li>
              <strong>Google Analytics</strong>, para medir visitas y consultas, solo si aceptas las
              cookies de medición.
            </li>
          </ul>
          <p>No vendemos ni cedemos tus datos a terceros para publicidad.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Conservación</h2>
          <p>
            Conservamos tus datos mientras dure la consulta o la relación comercial y, después, solo
            el tiempo que exijan las obligaciones legales aplicables.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Cookies y tecnologías similares</h2>
          <p>
            Usamos cookies de medición solo si aceptas. Google Analytics guarda cookies propias (por
            ejemplo _ga) para medir las visitas y el envío de consultas. No usamos cookies de
            publicidad ni de remarketing. Si rechazas, no se carga ningún script de Google. Tu
            elección se guarda en el propio navegador para no mostrarte el aviso de nuevo; puedes
            cambiarla borrando los datos del sitio en tu navegador.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Tus derechos</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición (derechos
            ARCO), y revocar tu consentimiento, escribiendo a{" "}
            <a className="underline" href="mailto:operaciones@nextelco.cloud">
              operaciones@nextelco.cloud
            </a>{" "}
            con el asunto "Derechos de datos personales". Responderemos en los plazos que fija la
            Ley 29733 y su reglamento.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas razonables: conexiones cifradas (HTTPS) y acceso restringido
            al buzón de contacto.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">10. Cambios en esta política</h2>
          <p>
            Si cambiamos esta política, publicaremos la versión actualizada en esta misma página con
            la nueva fecha.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

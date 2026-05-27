import { useEffect, useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Nombre muy corto").max(80),
  email: z.string().trim().email("Email inválido").max(160),
  company: z.string().trim().max(80).optional(),
  message: z.string().trim().min(10, "Cuéntanos un poco más").max(1000),
});

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`[Proyecto] ${r.data.name}${r.data.company ? " · " + r.data.company : ""}`);
    const body = encodeURIComponent(`${r.data.message}\n\n— ${r.data.name}\n${r.data.email}`);
    window.location.href = `mailto:operaciones@nextelco.cloud?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-background border border-line shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">
        {/* terminal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-line">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_8px_var(--cyan-glow)]" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              ~/contact — new_session.sh
            </span>
          </div>
          <button onClick={onClose} data-cursor="$ close" className="font-mono text-xs text-muted-foreground hover:text-amber-glow transition">
            [ESC] ✕
          </button>
        </div>

        {sent ? (
          <div className="p-12 text-center">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-glow mb-6">[ Pipeline ejecutado ]</div>
            <h3 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.03em] mb-4">
              Mensaje <span className="font-serif-it font-normal text-amber-glow">enviado</span>.
            </h3>
            <p className="text-muted-foreground">Te responderemos en menos de 24h hábiles.</p>
            <button onClick={onClose} className="mt-8 font-mono text-[11px] tracking-[0.25em] uppercase border-b border-foreground pb-1 hover:text-cyan-glow hover:border-cyan-glow transition">
              Cerrar →
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="p-6 md:p-10 space-y-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyan-glow mb-2">[ Iniciar conversación ]</div>
              <h3 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.03em]">
                Cuéntanos del <span className="font-serif-it font-normal text-amber-glow">proyecto</span>.
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="$ name" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} error={errors.name} />
              <Field label="$ email" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errors.email} />
            </div>
            <Field label="$ company (opt)" name="company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} error={errors.company} />
            <Field label="$ message" name="message" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} error={errors.message} />

            <div className="flex items-center justify-between pt-4">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                {form.message.length}/1000
              </span>
              <button type="submit" data-cursor="$ send" className="group inline-flex items-center gap-4 bg-foreground text-ink px-7 py-4 font-mono text-xs tracking-[0.25em] uppercase hover:bg-cyan-glow transition-colors duration-500">
                Enviar mensaje
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, error, type = "text", textarea }: {
  label: string; name: string; value?: string; onChange: (v: string) => void;
  error?: string; type?: string; textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground block mb-2">{label}</span>
      {textarea ? (
        <textarea
          name={name} value={value} onChange={(e) => onChange(e.target.value)} rows={5} maxLength={1000}
          className="w-full bg-transparent border-b border-line py-2 focus:border-cyan-glow focus:outline-none transition resize-none font-sans text-base"
        />
      ) : (
        <input
          name={name} type={type} value={value} onChange={(e) => onChange(e.target.value)} maxLength={200}
          className="w-full bg-transparent border-b border-line py-2 focus:border-cyan-glow focus:outline-none transition font-sans text-base"
        />
      )}
      {error && <span className="block mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-amber-glow">! {error}</span>}
    </label>
  );
}

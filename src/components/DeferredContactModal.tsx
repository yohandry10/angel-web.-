import { lazy, Suspense } from "react";
import { preloadContactModal } from "@/lib/contact-loader";
const ContactModal = lazy(() =>
  preloadContactModal().then((module) => ({ default: module.ContactModal })),
);

/** Keep validation and form code out of the initial marketing-page download. */
export function DeferredContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <Suspense
      fallback={
        <div
          className="contact-loading"
          role="dialog"
          aria-modal="true"
          aria-label="Contacto con NEXTELCO"
        >
          <div>
            <p role="status">Abriendo el formulario…</p>
            <button type="button" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      }
    >
      <ContactModal open onClose={onClose} />
    </Suspense>
  );
}

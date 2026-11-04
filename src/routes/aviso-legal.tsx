import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SitePageHeader } from "@/components/SiteChrome";
import "@/components/SupportingPages.css";
import { SITE_URL, pageMeta } from "@/lib/seo";

const TITLE = "Aviso legal — NEXTELCO SAC";
const DESC =
  "Aviso legal del sitio nextelco.cloud: titular, condiciones de uso y contacto de NEXTELCO SAC.";

export const Route = createFileRoute("/aviso-legal")({
  component: AvisoLegal,
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESC, path: "/aviso-legal" }),
    links: [{ rel: "canonical", href: `${SITE_URL}/aviso-legal` }],
  }),
});

function AvisoLegal() {
  return (
    <div className="site-theme legal-page">
      <SitePageHeader label="Aviso legal" />
      <main className="legal-content space-y-8 leading-relaxed">
        <h1 className="text-4xl font-semibold tracking-tight">Aviso legal</h1>
        <p className="text-sm text-muted-foreground">
          Última actualización: 2 de noviembre de 2026
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Titular del sitio</h2>
          <p>
            El sitio <strong>nextelco.cloud</strong> y sus servicios son operados por{" "}
            <strong>NEXTELCO SAC</strong>, con RUC 20616053575, Perú. Contacto:{" "}
            <a className="underline" href="mailto:operaciones@nextelco.cloud">
              operaciones@nextelco.cloud
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Objeto</h2>
          <p>
            Este sitio presenta los servicios de NEXTELCO: sistemas empresariales (incluido NEXTELCO
            ERP), ingeniería de software, DevOps, DevSecOps e inteligencia artificial aplicada. La
            información tiene carácter informativo y no constituye una oferta vinculante. Las
            condiciones comerciales, precios y alcances de cada servicio se definen en una propuesta
            o contrato firmado entre las partes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Uso del sitio</h2>
          <p>
            Te comprometes a usar el sitio de forma lícita, a no intentar vulnerarlo ni extraer
            datos de forma masiva, y a no enviar contenido falso o abusivo a través de sus
            formularios.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Propiedad intelectual</h2>
          <p>
            Los textos, diseños, logotipos y código del sitio son propiedad de NEXTELCO SAC o se
            usan con autorización. Queda prohibida su reproducción total o parcial sin autorización
            escrita, salvo citas breves con mención de la fuente.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Exactitud de la información</h2>
          <p>
            Procuramos que la información sea exacta y esté actualizada, pero no garantizamos que
            esté libre de errores u omisiones en todo momento. Las cifras de ejemplo de las
            demostraciones están identificadas como datos de demostración.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Enlaces a terceros</h2>
          <p>
            El sitio puede enlazar a servicios de terceros. NEXTELCO no controla su contenido ni su
            política de privacidad.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Limitación de responsabilidad</h2>
          <p>
            NEXTELCO no responde por daños derivados del uso del sitio o de la información que
            contiene, salvo en los casos que exija la ley peruana.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Legislación aplicable</h2>
          <p>
            Estas condiciones se rigen por las leyes de la República del Perú. Las controversias se
            someterán a los tribunales de Lima, sin perjuicio de los mecanismos que las partes
            pacten en un contrato.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

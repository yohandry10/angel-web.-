import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ITCursor } from "@/components/ITCursor";
import { SITE_URL } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a1218" },
      { name: "author", content: "NEXTELCO" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "keywords", content: "NEXTELCO, ERP, CRM, sistemas empresariales, IA, LLM, Deep Learning, Machine Learning, DevOps, DevSecOps, MLOps, Kubernetes, Terraform, AWS, GCP, Azure, CI/CD, Observabilidad, Lima, Perú, America Latina, EEUU, Europa" },
      { property: "og:site_name", content: "NEXTELCO" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_PE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}#organization`,
              name: "NEXTELCO",
              url: SITE_URL,
              email: "operaciones@nextelco.cloud",
              telephone: "+17862244098",
              address: { "@type": "PostalAddress", addressLocality: "Lima", addressRegion: "Lima", addressCountry: "PE" },
              knowsAbout: ["ERP", "CRM", "Sistemas empresariales", "LLMs", "Deep Learning", "Machine Learning", "DevOps", "DevSecOps", "MLOps", "Kubernetes", "Terraform", "AWS", "GCP", "Azure", "CI/CD", "Observability", "GitOps"],
              makesOffer: {
                "@type": "Offer",
                itemOffered: { "@type": "SoftwareApplication", name: "NEXTELCO ERP", url: `${SITE_URL}/erp` },
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}#website`,
              url: SITE_URL,
              name: "NEXTELCO",
              inLanguage: "es-PE",
              publisher: { "@id": `${SITE_URL}#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ITCursor />
      <Outlet />
    </QueryClientProvider>
  );
}

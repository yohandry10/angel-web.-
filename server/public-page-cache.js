const PUBLIC_PAGES = new Set([
  "/",
  "/erp",
  "/portafolio-web",
  "/experiencia",
  "/facturacion-electronica-sunat",
  "/sistema-pos-peru",
  "/software-inventario",
  "/aviso-legal",
  "/privacidad",
]);

/** Only the anonymous, build-owned marketing documents can enter the CDN cache. */
export function publicPageCacheHeaders(request, response) {
  const url = new URL(request.url);
  if (
    !["GET", "HEAD"].includes(request.method) ||
    !PUBLIC_PAGES.has(url.pathname) ||
    url.search ||
    request.headers.has("authorization") ||
    request.headers.has("cookie") ||
    request.headers.has("range") ||
    response.status !== 200 ||
    !response.headers.get("content-type")?.startsWith("text/html") ||
    response.headers.has("set-cookie") ||
    /(?:private|no-store|no-cache)/i.test(response.headers.get("cache-control") || "") ||
    response.headers.get("vary")?.trim() === "*"
  )
    return {};

  return {
    "Cache-Control": "public, max-age=0, must-revalidate",
    "Vercel-CDN-Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
  };
}

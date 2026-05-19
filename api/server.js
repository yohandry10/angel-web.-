import server from "../dist/server/server.js";

export default async function handler(request) {
  let absoluteUrl = request.url;
  if (!absoluteUrl.startsWith("http://") && !absoluteUrl.startsWith("https://")) {
    const host = request.headers.get("host") || "localhost";
    const proto = request.headers.get("x-forwarded-proto") || "https";
    absoluteUrl = `${proto}://${host}${request.url}`;
  }
  
  const absoluteRequest = new Request(absoluteUrl, request);
  return server.fetch(absoluteRequest);
}

import server from "../dist/server/server.js";

export default async function handler(request) {
  let absoluteUrl = request.url;
  if (!absoluteUrl.startsWith("http://") && !absoluteUrl.startsWith("https://")) {
    const host = request.headers.get("host") || "localhost";
    const proto = request.headers.get("x-forwarded-proto") || "https";
    absoluteUrl = `${proto}://${host}${request.url}`;
  }
  
  const init = {
    method: request.method,
    headers: request.headers,
  };
  
  // Node.js/undici is strict about GET/HEAD requests not having a body,
  // and requires duplex: 'half' for requests with a stream body.
  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = request.body;
    init.duplex = "half";
  }
  
  const absoluteRequest = new Request(absoluteUrl, init);
  return server.fetch(absoluteRequest);
}

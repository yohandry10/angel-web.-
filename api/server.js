import { Readable } from "node:stream";
import server from "../dist/server/server.js";

export default async function handler(req, res) {
  const method = req.method;
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const val of value) {
        headers.append(key, val);
      }
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  }

  const host = req.headers["host"] || "localhost";
  const proto = req.headers["x-forwarded-proto"] || "https";
  const absoluteUrl = `${proto}://${host}${req.url}`;

  const init = {
    method,
    headers,
  };

  if (method !== "GET" && method !== "HEAD") {
    init.body = req;
    init.duplex = "half";
  }

  const webRequest = new Request(absoluteUrl, init);
  const webResponse = await server.fetch(webRequest);

  res.statusCode = webResponse.status;
  res.statusMessage = webResponse.statusText;
  webResponse.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (webResponse.body) {
    Readable.fromWeb(webResponse.body).pipe(res);
  } else {
    res.end();
  }
}

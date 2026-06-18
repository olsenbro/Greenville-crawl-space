import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.crawlspacegreenville.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  if (host === "crawlspacegreenville.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    const pathname = request.nextUrl.pathname === "/" ? "" : request.nextUrl.pathname;
    const canonical = `https://${CANONICAL_HOST}${pathname}`;
    const response = NextResponse.redirect(url, 301);
    response.headers.set("Link", `<${canonical}>; rel="canonical"`);
    return response;
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: "/:path*",
};

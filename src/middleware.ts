import { NextRequest, NextResponse, userAgent } from "next/server";

export const middleware = (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const authorization_token = searchParams.get("authorization_token");
  if (authorization_token) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("state");
    url.searchParams.delete("authorization_token");
    return NextResponse.redirect(url, {
      headers: {
        "Set-Cookie": `authorization_token=${authorization_token}`,
      },
    });
  }
  const { device } = userAgent(request);
  const url = request.nextUrl.clone();
  const isDesktop = device.type !== "mobile";
  if (isDesktop && !url.pathname.includes("api")) {
    url.pathname = `/desktop${request.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  }
};

export const config = { matcher: "/((?!.*\\.).*)" };

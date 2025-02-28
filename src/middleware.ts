import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const privatePath = ["/me"];
const authPath = ["/login", "/register"];
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("sessionToken");
  const pathName = request.nextUrl.pathname;

  //chưa đăng nhập thì không cho vào private paths
  if (privatePath.some((path) => pathName.startsWith(path) && !sessionToken)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //đăng nhập rồi thì không cho vào login/register nữa
  if (authPath.some((path) => pathName.startsWith(path) && sessionToken)) {
    return NextResponse.redirect(new URL("/me", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/me", "/login", "/register"],
};

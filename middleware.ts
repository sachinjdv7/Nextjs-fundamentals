export { default } from "next-auth/middleware";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export const config = {
  matcher: ["/dashboard/:path*"],
};

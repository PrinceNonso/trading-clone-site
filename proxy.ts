import NextAuth from "next-auth";
import authConfig from "./auth.config";

/**
 * Next.js 16+ "proxy" convention (formerly middleware)
 * We export a named function 'proxy' and provide it as default.
 */
const { auth: authHandler } = NextAuth(authConfig);

export async function proxy(req: any, ctx: any) {
  return (authHandler as any)(req, ctx);
}

export default proxy;

export const config = {
  // Matching everything except static files and api routes that don't need auth
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

import arcjet, {
  detectBot,
  shield,
  createMiddleware as createArcjetMiddleware,
} from "@arcjet/next";
import { clerkMiddleware } from "@clerk/nextjs/server";

/* global process */

// Clerk setup
const clerk = clerkMiddleware({
  publicRoutes: ["/", "/plans", "/sign-in(.*)", "/sign-up(.*)"],
});

const arcjetKey = process.env.ARCJET_KEY;
const arcjetMode = process.env.NODE_ENV === "production" ? "LIVE" : "DRY_RUN";

// In local dev (or when ARCJET_KEY isn't configured), don't hard-block requests.
// This avoids 403s that break the Next.js dev client.
const middleware = arcjetKey
  ? createArcjetMiddleware(
      arcjet({
        key: arcjetKey,
        rules: [
          shield({ mode: arcjetMode }),
          detectBot({
            mode: arcjetMode,
            allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"],
          }),
        ],
      }),
      clerk
    )
  : clerk;

export default middleware;

// Middleware matcher
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)", "/api(.*)"],
};

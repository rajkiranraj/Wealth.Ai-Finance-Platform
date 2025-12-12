import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtected = createRouteMatcher([//This means any URL starting with /dashboard, /account, /transaction is protected.
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);
export default clerkMiddleware(async (auth,req)=>{//This ensures nobody can reach dashboard/account pages without authentication.
  const {userId} = await auth();
  if(!userId && isProtected(req)){
    const {redirectToSignIn} = await auth();
    return redirectToSignIn();
  }
});
export const config = {//Which routes should pass through the middleware It ignores static files (.css, .png, .js, fonts, images…)
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};


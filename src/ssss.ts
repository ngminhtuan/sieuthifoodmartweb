// middleware.ts — place this at your project root (same level as app/ or pages/)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ── pages you still want accessible during maintenance ──
const ALLOWED_PATHS = [
  '/maintenance',       // the maintenance page itself
  '/favicon.ico',
  '/_next/',            // Next.js static assets (CSS, JS chunks)
  '/images/',           // your public images if any
  '/logo-',
  '/banner',
  '.png',
  '.jpg',
  '.jpeg',
  '.svg',
  '.webp',
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // check if the path is allowed
const isAllowed = ALLOWED_PATHS.some(
  (allowed) =>
    pathname === allowed ||
    pathname.startsWith(allowed) ||
    pathname.endsWith(allowed)
);

  // if already on maintenance or an allowed path → let it through
  if (isAllowed) {
    return NextResponse.next();
  }

  // everything else → redirect to /maintenance
  return NextResponse.rewrite(request.nextUrl.origin + '/maintenance');
}

// ── optional: only run middleware on specific paths ──
// Remove this if you want it to apply everywhere (default).
// export const config = {
//   matcher: [
//     '/((?!_next/static|_next/image|favicon.ico).*)',
//   ],
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/firebase-admin';

export async function middleware(request: NextRequest) {
  // Get token from session cookie
  const session = request.cookies.get('session')?.value;

  const pathName = request.nextUrl.pathname;

  // Redirect to login if accessing dashboard without auth
  if (pathName.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      // Verify the session cookie
      await auth.verifySessionCookie(session, true);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirect to dashboard if logged in and accessing login page
  if (pathName === '/login') {
    if (session) {
      try {
        await auth.verifySessionCookie(session, true);
        return NextResponse.redirect(new URL('/dashboard', request.url));
      } catch (error) {
        // Invalid session cookie, allow access to login page
        return NextResponse.next();
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}; 
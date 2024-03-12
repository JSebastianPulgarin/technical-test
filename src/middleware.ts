import { NextRequest, NextResponse } from "next/server";

import { URL_LOGIN } from '@/consts/routes';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const cookie = request.cookies.get('token');
  const token = cookie?.value;

  if (!token) {
    return NextResponse.redirect(new URL(URL_LOGIN, request.url));
  } 
  else {
    return NextResponse.next();
  }
}

// Patterns where the middleware will be executed
export const config = {
  matcher: [
    '/home',
  ]
}

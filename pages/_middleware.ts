// pages/_middleware.ts
const signinInPages = ['/', '/playlist', 'library']

import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if (signinInPages.find((p) => p === request.nextUrl.pathname)) {
    const token = request.cookies.TRAX_ACCESS_TOKEN

    if (!token) {
      return NextResponse.redirect(new URL('/signin', request.url))
    }
  }
}

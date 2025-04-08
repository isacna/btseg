import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const RATE_LIMIT = 5 
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 

const requestCounts = new Map<string, { count: number; timestamp: number }>()

export function middleware(request: NextRequest) {

  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
    const now = Date.now()

    for (const [key, value] of requestCounts.entries()) {
      if (now - value.timestamp > RATE_LIMIT_WINDOW) {
        requestCounts.delete(key)
      }
    }

    const requestData = requestCounts.get(ip) || { count: 0, timestamp: now }
    if (requestData.count >= RATE_LIMIT) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      )
    }

    requestCounts.set(ip, {
      count: requestData.count + 1,
      timestamp: now
    })

    const origin = request.headers.get('origin')
    const allowedOrigin = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_APP_URL

    if (origin && allowedOrigin && !origin.includes(allowedOrigin)) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid origin' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
} 
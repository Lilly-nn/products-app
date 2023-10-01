import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get('JWT');
  if (!token) {
    return new NextResponse('error', {
      status: 401,
      statusText: 'Unauthorized',
    });
  }
  try {
    verify(token.value, process.env.JWT_SECRET);
    return new NextResponse('success', {
      status: 200,
      statusText: 'Authorized',
    });
  } catch (err) {
    return new NextResponse('error', {
      status: 401,
      statusText: 'Unauthorized',
    });
  }
}

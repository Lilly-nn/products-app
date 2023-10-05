import { sendMail } from '../../../services/mailService';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();
    await sendMail(email, subject, message);
    return new NextResponse(JSON.stringify({ email, subject, message }), {
      status: 200,
      statusText: 'Your email was sent',
    });
  } catch (err) {
    console.log(err);
    return new NextResponse('Could not send your email, try again later', {
      status: 400,
    });
  }
}

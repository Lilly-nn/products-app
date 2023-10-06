import { NextResponse } from 'next/server';
import { connectToMongoDB } from '../../../../DB/index.js';
import User from '@/DB/models/userModel';

export async function GET(request) {
  try {
    await connectToMongoDB();
    const userId = request.nextUrl.pathname.split('/').at(-1);
    const user = await User.findById(userId);
    const likedProducts = user.liked;
    return new NextResponse(JSON.stringify(likedProducts), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse('Could not fetch', {
      status: 400,
    });
  }
}

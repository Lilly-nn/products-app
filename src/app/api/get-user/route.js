import { NextResponse } from 'next/server';
import { connectToMongoDB } from '../../../DB/index';
import User from '../../../DB/models/userModel';

export async function POST(request) {
  const { id } = await request.json();
  try {
    await connectToMongoDB();
    const user = await User.findById(id);
    if (!user) {
      return new NextResponse(result.error, {
        status: 404,
        statusText: 'Such user not found',
      });
    }
    return new NextResponse(JSON.stringify(user), {
      status: 200,
      statusText: 'User found',
    });
  } catch (err) {
    return new NextResponse('not found', {
      status: 404,
      statusText: 'Such user not found',
    });
  }
}

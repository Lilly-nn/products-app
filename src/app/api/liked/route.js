import { NextResponse } from 'next/server';
import { connectToMongoDB } from '../../../DB/index';
import User from '../../../DB/models/userModel';

export async function POST(request) {
  try {
    await connectToMongoDB();
    const { userId, productId } = await request.json();
    const user = await User.findById({ userId });
    user.likedProducts.push(productId);
    await user.save();

    return new NextResponse('success', {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse('An error happened', {
      status: 400,
    });
  }
}

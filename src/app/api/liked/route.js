import { NextResponse } from 'next/server';
import { connectToMongoDB } from '../../../DB/index';
import User from '../../../DB/models/userModel';

export async function PUT(request) {
  try {
    await connectToMongoDB();
    const { userId, product } = await request.json();
    const user = await User.findById(userId);
    const exists = user.liked.some((el) => el.id === product.id);
    if (!exists) {
      user.liked.push(product);
    } else {
      user.liked = user.liked.filter((item) => item.id !== product.id);
    }
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

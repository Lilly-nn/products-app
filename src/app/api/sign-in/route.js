import User from '@/DB/models/userModel';
import bcryptjs from 'bcryptjs';
import { serialize } from 'cookie';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { connectToMongoDB } from '../../../DB/index';

const expireDate = 60 * 60 * 24 * 30;

export async function POST(request) {
  await connectToMongoDB();
  const body = await request.json();
  try {
    const validUser = await User.findOne({ email: body.email });
    if (!validUser) {
      return new NextResponse('not valid', {
        status: 400,
        statusText: 'User credentials are not valid',
      });
    }
    const validPassword = await bcryptjs.compare(body.password, validUser.password);
    if (!validPassword) {
      return new NextResponse('not valid password', {
        status: 400,
        statusText: 'User credentials are not valid',
      });
    }
    const token = jwt.sign({ id: validUser._id, email: validUser.email }, process.env.JWT_SECRET, {
      expiresIn: expireDate,
    });
    const serialized = serialize('JWT', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: expireDate,
      path: '/',
    });
    return new NextResponse(JSON.stringify({ validUser, token }), {
      status: 200,
      statusText: 'User signed in',
      headers: { 'Set-Cookie': serialized },
    });
  } catch (err) {
    console.log(err);
  }
}

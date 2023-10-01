import { registrationSchema } from '@/info/validation/validationSchemas';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';
import { connectToMongoDB } from '../../../DB/index';
import User from '../../../DB/models/userModel';

export async function POST(request) {
  await connectToMongoDB();
  const body = await request.json();
  //validate inputs
  const result = registrationSchema.safeParse({ ...body });
  if (!result.success) {
    return new NextResponse(result.error, {
      status: 400,
      statusText: 'Error while registering - bad credentials',
    });
  }
  //check if user exists
  const userExists = await User.findOne({ email: body.email });
  if (userExists) {
    return new NextResponse('error', {
      status: 400,
      statusText: 'Such user already exists',
    });
  }
  //if everything passed
  delete body.confirmPassword;
  const hashedPassword = await bcryptjs.hash(body.password, 5);
  const user = { ...body, password: hashedPassword };

  try {
    const newUser = new User(user);
    await newUser.save();
    return new NextResponse(JSON.stringify(newUser), {
      status: 200,
      statusText: 'User was created',
    });
  } catch (err) {
    console.log(err);
    return new NextResponse('An error happened while registering', {
      status: 400,
    });
  }
}

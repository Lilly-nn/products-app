import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../../DB/index";
import User from "../../../DB/models/userModel";

export async function POST(request: NextRequest) {
    await connectToMongoDB();
    const { email, password } = await request.json();
    const newUser = new User({ email, password });
    try {
        await newUser.save();
        return new NextResponse('added')
    } catch (err) {
        console.log(err);
        return new NextResponse('not')
    }


}
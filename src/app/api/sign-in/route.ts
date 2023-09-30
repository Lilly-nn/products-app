import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../../DB/index";
import bcryptjs from "bcryptjs";
import User from "@/DB/models/userModel";

export async function POST(request: NextRequest) {
    await connectToMongoDB();
    const body: RequestType = await request.json();
    try {
        const validUser = await User.findOne({ email: body.email });
        if (!validUser) {
            return new NextResponse('not valid', {
                status: 400,
                statusText: "User credentials are not valid"
            })
        }
        const validPassword = await bcryptjs.compare(body.password, validUser.password);
        if (!validPassword) {
            return new NextResponse('not valid password', {
                status: 400,
                statusText: "User credentials are not valid"
            })
        }
        return new NextResponse(JSON.stringify(validUser), {
            status: 200,
            statusText: "User signed in"
        })
    } catch (err) {
        console.log(err)
    }

}

type RequestType = {
    email: string;
    password: string
}
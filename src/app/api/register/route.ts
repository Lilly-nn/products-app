import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../../DB/index";
import User from "../../../DB/models/userModel";
import { registrationSchema } from "@/info/validation/validationSchemas";

export async function POST(request: NextRequest) {
    await connectToMongoDB();
    const body: object = await request.json();
    const result = registrationSchema.safeParse({ ...body });

    if (!result.success) {
        return new NextResponse(result.error, {
            status: 400,
            statusText: "Error while registering - bad credentials"
        })
    }

    try {
        const newUser = new User(body);
        await newUser.save();
        return new NextResponse("success", {
            status: 200,
            statusText: "User was created"
        })
    } catch (err) {
        console.log(err);
        return new NextResponse("An error happened while registering", {
            status: 400
        })
    }
}
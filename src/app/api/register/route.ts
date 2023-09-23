import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../../DB/index";
import User from "../../../DB/models/userModel";
import { RegistrationSchemaType, registrationSchema } from "@/info/validation/validationSchemas";
import bcryptjs from "bcryptjs";
import { UserType } from "@/types/userType";

export async function POST(request: NextRequest) {
    await connectToMongoDB();
    const body: UserType = await request.json();
    //validate inputs
    const result = registrationSchema.safeParse({ ...body });
    if (!result.success) {
        return new NextResponse(result.error, {
            status: 400,
            statusText: "Error while registering - bad credentials"
        })
    }

    delete body.confirmPassword;
    const hashedPassword = await bcryptjs.hash(body.password, 5);
    const user = { ...body, password: hashedPassword };

    try {
        const newUser = new User(user);
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
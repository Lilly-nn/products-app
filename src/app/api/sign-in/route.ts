import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../../DB/index";

export async function POST(request: NextRequest) {
    await connectToMongoDB();

}
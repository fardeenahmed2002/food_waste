import { signup } from "@/app/controllers/authController";
import connectToDB from "@/app/Utils/database";
import { NextResponse } from "next/server";
export async function GET(req) {
    return NextResponse.json({
        message: `server is running`
    })
}

// signup route
// http://localhost:3000/api/auth/signup
export async function POST(req) {
    await connectToDB()
    try {
        return signup(req);
    } catch (error) {
        console.log(error.message)
    }
}
import { login } from "@/app/controllers/authController";
import connectToDB from "@/app/Utils/database";
import { NextResponse } from "next/server";

// http://localhost:3000/api/auth/login
export const POST = async (req) => {
    await connectToDB()
    try {
        return login(req)
    } catch (error) {
        console.log(error.message)
    }
}
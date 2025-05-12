import { signup } from "@/app/controllers/authController";
import connectToDB from "@/app/Utils/database";
import { uploadImage } from "@/app/Utils/uploadimage";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  await connectToDB();
  try {
    const formData = await req.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const contactNumber = formData.get('contactNumber');
    const address = formData.get('address');
    const role = formData.get('role');
    const imageResult = await uploadImage(formData, 'avatar', '/uploads/person.png');
    if (typeof imageResult === 'object' && imageResult.success === false) {
      // Only send the message to frontend
      return NextResponse.json({
        success: false,
        message: imageResult.message  // Just the string message
      });
    }

    const image = imageResult; // It's a valid string path now
    const result = await signup({
      name,
      email,
      password,
      contactNumber,
      address,
      role,
      image
    });
    return result;
  } catch (error) {
    console.error("Signup error:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};

import fs from 'fs';
import path from 'path';
import { signup } from "@/app/controllers/authController";
import connectToDB from "@/app/Utils/database";

export const POST = async (req) => {
  await connectToDB();
  try {
    const formData = await req.formData();
    const file = formData.get('avatar');
    let filename = '';
    if (file && file.name) {
      const buffer = Buffer.from(await file.arrayBuffer());
      filename = Date.now() + '-' + file.name.replace(/\s+/g, '');
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      fs.mkdirSync(uploadDir, { recursive: true });
      const filepath = path.join(uploadDir, filename);
      fs.writeFileSync(filepath, buffer);
    }

    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const contactNumber = formData.get('contactNumber');
    const address = formData.get('address');
    const role = formData.get('role');

    const result = await signup({
      name,
      email,
      password,
      contactNumber,
      address,
      role,
      image: filename ? `/uploads/${filename}` : '', // send path to controller
    });

    return result;
  } catch (error) {
    console.error("Signup error:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};

import { NextResponse } from "next/server.js";
import { Usermodel } from "../Models/User.js";
import bcrypt from 'bcryptjs'
import transporter from "../Utils/nodemailer.js";
import jwt from "jsonwebtoken"
export const signup = async (req) => {
    const { name, email, password, contactNumber, address, noOfTeamMember, role, yourCollectingArea, ngoRegistrationNumber, collectorType } = await req.json()
    try {
        if (!name || !email || !password || !role || !contactNumber) {
            return NextResponse.json({
                message: `did not got data properly`,
                success: false
            })
        }
        const existinguser = await Usermodel.findOne({ email })
        const existingContactNumber = await Usermodel.findOne({ contactNumber })
        if (existinguser) {
            return NextResponse.json({
                message: `user already exist`,
                success: false
            })
        }
        if (existingContactNumber) {
            return NextResponse.json({
                message: `contact number already exist`,
                success: false
            })
        }
        const hashedpassword = await bcrypt.hash(password, 10)
        let user
        if (role === `user`) {
            user = new Usermodel({
                name,
                email,
                password: hashedpassword,
                contactNumber,
                address,
                isUser: true,
                isAdmin: false,
                isNgo: false,
                isDonor: false,
                role: `user`,
            })
        }
        else if (role === `donor`) {
            user = new Usermodel({
                name,
                email,
                password: hashedpassword,
                contactNumber,
                address,
                isUser: true,
                isAdmin: false,
                isNgo: false,
                isDonor: false,
                role: `donor`,
            })
        }
        else if (role === `collector`) {
            user = new Usermodel({
                name,
                email,
                password: hashedpassword,
                contactNumber,
                address,
                isUser: true,
                isAdmin: false,
                isNgo: false,
                isDonor: false,
                role: `collector`,
            })
        }
        else {
            return NextResponse.json({
                message: `${role} role does not exist`,
                success: false
            })
        }
        await user.save()
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Welcome to Website",
            text: `Welcome to our site! You have registered with ${email}.`
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({
            message: `signup successfull`,
            user
        })
    }
    catch (error) {
        console.log(error.message)
    }

}


export const login = async (req) => {
    const { email, password } = await req.json()
    try {
        if (!email || !password) {
            return NextResponse.json({
                message: `missing data`,
                success: false
            })
        }
        const user = await Usermodel.findOne({ email })

        if (!user) {
            return NextResponse.json({
                message: `user not found`,
                success: false
            })
        }
        const matchedPassword = await bcrypt.compare(password, user.password)
        if (!matchedPassword) {
            return NextResponse.json({
                message: `invalied password`,
                success: false
            })
        }
        if (user.isBanned) {
            return NextResponse.json({
                message: `account suspended`,
                success: false
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: `7d` })
        return NextResponse.json({
            message: `login successfully`,
            success: true,
            token,
            user
        })
    } catch (error) {
        console.log(error.message)
    }

}
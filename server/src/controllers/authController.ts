import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
    userId?: string;
}
import User from "../models/userModel.ts";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET!, {
            expiresIn: "1h",
        });

        res.status(201).json({ token });
    } catch (err) {
        console.error('Error during user registration:', err);  // Agrega esta línea para loguear el error
        const errorMessage = (err as Error).message;
        res.status(500).json({ message: "Server error", error: errorMessage });  // Agrega el mensaje de error al response
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
            expiresIn: "1h",
        });

        res.status(200).json({ token });
    } catch (err) {
    }
};

export const getUser = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

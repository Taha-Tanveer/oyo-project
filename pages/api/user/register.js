import connectDb from "@/db";
import User from "../../../models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ message: "Please fill all the fields" });
    }
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      res.status(422).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });
    const result = await newUser.save();
    const token = jwt.sign({ token: result._id }, JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(201).json({ msg: "User created successfully", token });
  }
}

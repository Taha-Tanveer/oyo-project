import User from "../../../models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDb from "@/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDb();
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Please fill all the fields" });
    }
    const emailExists = await User.findOne({ email });
    if (!emailExists) {
      res.status(400).json({ message: "Please register first !" });
    }
    const checkPassword = await bcrypt.compare(password, emailExists.password);
    // yahan pe emailExists.password isliye use kare ki , emailExists me ek user hai so isme se password nikalre
    if (!checkPassword) {
      res.status(400).json({ message: "Incorrect credentials !" });
    }
    const token = jwt.sign({ token: emailExists._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(200).json({ msg: "User logged in successfully", token });
  }
}

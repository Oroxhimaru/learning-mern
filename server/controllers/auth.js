import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import User from "../models/User";

/* Register User */

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;
        
        const salt =  await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new  User ({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


/* logging in */
export const login = async (req, res) => {
 try {
    // Request se email aur password extract kiye jaate hain
    const { email, password } = req.body;
     // Database mein user ko email ke basis par dhoonda jaata hai
    const user = await User.findOne({  email: email });
    // Agar user mojood nahi hai, toh client ko error message bheja jaata hai
    if (!user) return res.status(400).json({ msg: "User doesn't exist" });
 // User ka diya gaya password aur database mein stored password match kiya jaata hai
    const isMatch = await bcrypt.compare(password, user.password);
    // Agar passwords match nahi karte, toh client ko error message bheja jaata hai
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

     // Agar sab kuch sahi hai, toh JSON Web Token (JWT) generate kiya jaata hai
    // Is token mein user ka ID hota hai, taki future requests mein use kiya ja sake
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
     // User object se password property hata di jaati hai (security ke liye)
    delete user.password;
     // Client ko response mein token aur user ki details bheji jaati hain
    res.status(200).json({ token, user });
    // Agar koi error aati hai toh, server error status code (500) ke saath error message bheji jaati hai
 } catch (error) {
    res.status(500).json({ error: error.message });    
 }
};
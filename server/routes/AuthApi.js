import { Router } from "express";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import  jwt  from "jsonwebtoken";
const router = Router();


router.post("/register", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(406).json({ message: "User already exists" });
        return;
    }
    //hasing password using bcrypt
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    console.log(hashedPassword);

    const user = await User({ email, password: hashedPassword, firstName, lastName });
    const savedUser = await user.save();
    console.log(savedUser);
    res.status(201).json({ message: "user created" });
});


router.post('/login', async (req,res)=>{
    const{email,password} = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        res.status(406).json({ message: "Credential not found" });
        return;
    }
    //checking if token is matched with password
    const matched=await bcrypt.compare(password,user.password);
    if (!matched) {
        res.status(406).json({ message: "Credential not found" });
        return;
    }
    //jwt token
    const payload={
        username:email,
        _id:user._id,
     
    };
    const token=jwt.sign(payload,process.env.JWT_SECRET);
    //console.log(token);
    res.json({message:"Logged in succesfully",token});
});

export default router;
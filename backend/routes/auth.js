import express  from "express";
import User from "../models/User.js";
const router =express.Router()
import { body } from "express-validator";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import fetchUser from "../middleware/fetchuser.js";


const JWT_SECRET="kyahaalhaimahibhai";


router.post('/createuser',
[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid password').isLength({min:5})
]
,
async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
    let user=await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"This email already exists"});
    }
    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt);
    user=await User.create({
        name:req.body.name,
        password:secPass,
        email:req.body.email
    }).then((user)=>{
        const data={
            id:user.id
        }
        const authtoken = Jwt.sign(data,JWT_SECRET);
        return res.json({authtoken})
    })
    .catch(err=>{console.log(err);
        res.status(400).json({error:"Please enter correct input"})});
    }catch(error){
        console.error(error.message);
        return res.status(500).json({message:"Some error occoured"});
    }
})


router.post('/login',
[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists()
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"please log in with correct credentials"})
        }
        const passwordCompare=await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"please log in with correct credentials"})
        }
        const payload={
            id:user.id
        }
        const authtoken=Jwt.sign(payload,JWT_SECRET);
        return res.status(200).json({authtoken}); 
    }catch(error){
        return res.status(500).json({message:"Internal Server error"});
    }
})



router.get('/getuser',fetchUser,
async (req,res)=>{
    try{
        const userId=req.user;
        const user=await User.findById(userId).select("-password")
        console.log(user);
        return res.send(user);
    }catch(error){
        return res.status(400).json({message:"Internal Server Error"});
    }
})

export default router
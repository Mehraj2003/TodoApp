import express from "express";
import User from "../models/User.js";
const router = express.Router();
import { body, validationResult } from 'express-validator';

router.get("/",(req,res)=>{
    res.json({message:"Get all users"})
})
router.post("/",[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid password with min 5 characters').isLength({min:5})
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.send(req.body);
    // console.log(req.body)
    // const user = new User(req.body);
    // user.save();
})

export default router
const express=require('express');
const router=express.Router()
const {User,Order} =require('../model/model')
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const authMiddleware=require('../middleware/authMiddleware')


router.post('/reg', async (req, res) => {
    const { username, email, password } = req.body;
    const hashpassword=await bcrypt.hash(password,10);

    try {
        
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.json({ message: "The email is already taken" });
        }

        const newUser = new User({
            username,
            email,
            password:hashpassword
        });

        await newUser.save();
        res.json({ message: "User registered successfully" });

    } catch (err) {
        console.error(err);
        res.json({ message: "Server error" });
    }
});


router.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    const user=await User.findOne({email})
    if(!user){
        return res.json("No record excisted")
    }
    const ismatch=await bcrypt.compare(password,user.password)
    if(!ismatch){
        res.json("the password is incorrect")
    }
    const token=jwt.sign({id:user._id,email:user.email},"mysecret",{expiresIn:"1h"});
    res.json({token})
})

router.get("/home",authMiddleware,(req,res)=>{
    res.json({message:`Welcome ${req.user.email.replace("@gmail.com"," ")}`})
})

router.post('/checkout', async (req, res) => {
    try {
        const { useremail, name, useraddress, orders } = req.body;
        const newOrder = new Order({ useremail, name, useraddress, orders });
        await newOrder.save();
        res.json("Success");
    } catch (err) {
        res.status(500).json("Checkout failed");
    }
});

module.exports=router;
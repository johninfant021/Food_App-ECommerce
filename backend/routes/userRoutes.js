const express=require('express');
const router=express.Router()
const {User,Order} =require('../model/model')
// const Users=require('../model/model')

// const Users=require('../model/model')
router.post('/reg', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.json({ message: "The email is already taken" });
        }

        const newUser = new User({
            username,
            email,
            password 
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
    User.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("No record excisted")
        }
    })
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
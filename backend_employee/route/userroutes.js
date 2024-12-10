const express = require('express'
);
const router =express.Router();
const UserModel = require('../model/userModel');
const jwt=require('jsonwebtoken')
router.use(express.json());
router.post('/login', async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        if (user.password === req.body.password) {
            const payload = { email: user.email };
            if (user.userType === 'User') {
                const token = jwt.sign(payload, 'token');
                return res.status(200).send({ message: 'Login successful', token });
            } else if (user.userType === 'Admin') {
                payload.userType = user.userType;
                const admintoken = jwt.sign(payload, 'admintoken');
                return res.status(200).send({ message: 'Logged in as Admin', admintoken });
            }
        }

        res.status(401).send({ message: 'Invalid password or user type' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
});


  
router.post('/s',async(req,res)=>{
try {
    const data = req.body;
    await UserModel(data).save();
    res.status(200).send({message:"data added"});
    
} catch (error) {
    console.log(error)
}

})

module.exports=router;
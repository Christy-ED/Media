const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {findByUsername, createUser, findById} = require('../models/userModel');
const { request } = require('express');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', async (req, res) => {
    const {username,email,password} = req.body;

    try{
        const hasedpassword = await bcrypt.hash(password, 10);
        await createUser({username,email,password:hasedpassword});
        res.status(201).json({message:'User created successfully'});
    }catch(err){
        res.status(500).json({message:'Internal server error'});
    }
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;

    try{
        const user = await findByUsername(username);
        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).json({message:'Invalid username or password'});
        }
        const  token = jwt.sign({id: user.id, username:user.username},process.env.JWT_SECRET,{
            expiresIn: '1h'
        });
        res.json({token});
    }catch(err){
        res.status(500).json({message:'Internal server error'});
    }
});

router.get('/profile', auth, async(req, res) => {
    try {
        const user = await findById(req.user.id);
        res.json({id:user.id, username:user.username, email:user.email,profileImage:user.profileImage});
        
    } catch (error) {
        res.status(500).json({message:'Internal server error'});
    }
});

module.exports = router;

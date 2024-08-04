const express = require('express');
const User = require('../models/user');
const router = express.Router();
const cors = require('cors');
const { test } = require('../controllers/authController');
       //middleware
 
    router.use(
        cors({
            credentials: true,
            origin: 'http://localhost:5173'
        })
    );


    router.post('/register', async (req, res) => {
            
        try {
            const {name, email, password} = req.body;
               //Cheking if the name was enterd
               if(!name){
                  return res.json({
                    error: 'Name is required'
                })
                  
               };
               
               //check is password is good
               if(!password || password.length < 6){
                   return res.json({
                       error: 'Password is required and must be at least 6'
                   })
               };
                //check if email is good

                const exist = await User.findOne({email})
                if(exist){
                    return res.json({
                        error: 'Email is already in use'
                    })
                } 

                const  user = await User.create({
                    name,email,password
                }) 
             return res.json(user)
        } catch (error) {
            
            console.log(error);
        }
    });

//router.get('/', test)

module.exports = router

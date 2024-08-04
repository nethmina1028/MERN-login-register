const express = require('express');
const User = require('../models/user');
const router = express.Router();
const cors = require('cors');
const { test } = require('../controllers/authController');
const bcryptjs = require('bcryptjs');


       //middleware
 
    router.use(
        cors({
            credentials: true,
            origin: 'http://localhost:5173'
        })
    );

    //register user
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
           
                const hashedPassword = bcryptjs.hashSync(password, 10);

                //create user in database
                const  user = await User.create({
                    name,
                    email,
                    password : hashedPassword,
                }) ;
             return res.json(user)
        } catch (error) {
            
            console.log(error);
        }
    });


    //login user
      
    router.post('/login', async (req, res) => {
             
             try {
                const {email, password} = req.body;

                //check if email is exist
                const user = await User.findOne({email});

                if(!user){
                    return res.json({
                        error: 'Not user found'
                    })
                }

                //check if password is correct
                if(!bcryptjs.compareSync(password, user.password)){
                    return res.json({
                        error: 'Invalid password'
                    })
                } else {
                   
                    return res.json({
                        message: 'succesfully login',
                    })
                }

                
             } catch (error) {
                  
                  console.log(error);
             }
    });

    
     


module.exports = router

const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const { mongoose }= require('mongoose');
   
const app = express();

//connect to db
mongoose.connect(process.env.MONGO_URL)
   .then(()=>console.log('DB connected'))
    .catch((err)=>console.log('database not connected',err));
         

      //middleware

    app.use(express.json());
      


//set package.josn

app.use('/',require('./routes/authRoutes'));

 
const port = 8000;

app.listen(port,()=>console.log(`Server is running on port ${port}`));
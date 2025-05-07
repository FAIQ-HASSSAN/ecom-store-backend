import express from 'express';
const router = express.Router();
import { registerUser , loginUser } from '../handlers/auth-handler.js';

router.post('/register',async(req,res) => {
    let registerData = req.body;

    if(registerData.name && registerData.email && registerData.password){
          const user = await registerUser(registerData);
          res.send({
            message : 'user created successfully', user
          })
    }else{
        res.status(400).json({
            error : 'please provide name , email and password'
        })
    }
})


router.post('/login',async (req,res) => {
    let registerData = req.body;
    if(registerData.email && registerData.password){
         const registeredUser = await loginUser(registerData);
         if(registeredUser){
             res.status(200).send(registeredUser);
         }else{
            res.status(400).json({
                error : 'email or password is incorrect !'
            })
         }
    }else{
        res.status(400).json({
            error : 'please provide email and password'
        })
    }
})

export default router;
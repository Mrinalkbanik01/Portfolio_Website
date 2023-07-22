const express = require('express');
const {body ,validationResult } = require('express-validator');
const router = express.Router()
const Message = require('../Models/Message');

router.post("/" , 
[
body("name","Please Enter a title").isLength({min:1}),
body("message","Please Enter a Message").isLength({min:1}),
body("email","Please Enter a Valid E-MAil").isEmail(),
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array);
        // console.log("Hi");
    }
    try {
        let message = await Message.create({ 
          name : req.body.name,    
          message: req.body.message,    
          email : req.body.email    
        });
        console.log("hii");
        console.log("Message Sent!!!");
        return res.status(200).json(message);
    } catch (error) {
        console.log("LWre");
        console.log(error);
        return res.status(400).send("Message couldnt be added");
    }
}
)

module.exports = router;
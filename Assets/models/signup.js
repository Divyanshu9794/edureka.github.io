const mongoose = require("mongoose");
const Users = new mongoose.Schema({

    user:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    confrm_passwd:{
        type:String,
        required:true
    }

})


const Signup = new mongoose.model("Signup", Users);

module.exports = Signup;
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const UserSchema=new mongoose.Schema({
    username:{
        type: String,
        require: true,
        min:3, 
        max:20,
        unique: true
    },
    email:{
        type:String,
        require:true,
        max:50, 
        unique:true
    },
    password:{
        type:String, 
        require:true,
        min:6
    },
    profilePicture:{
        type:String, 
        default:""
    },
    coverPicture:{
        type:String, 
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

},
{timestamps:true}
);
 
// UserSchema.pre('save',async function (next){
//     const user=this
       
//     if(user.isModified('password')){
//          user.password=await bcrypt.hash(user.password,8)
//     }
//     next()
// })

module.exports =mongoose.model("User",UserSchema);
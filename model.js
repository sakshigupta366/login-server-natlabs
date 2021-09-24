const mongoose=require('mongoose');
const userSchems=new mongoose.Schema({
    usernm:{
        type:String,
        required:true        
    },
    phoneno:{
        type:Number,
        required:true        
    },
    email:{
        type:String,
        required:true        
    },
    passwd:{
        type:String,
        required:true        
    }
});
module.exports=mongoose.model('User',userSchems);
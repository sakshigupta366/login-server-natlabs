const express=require('express');
const schema=require('../server/model')
const app=express();
app.post('/login',(req,res)=>{
const schemacopy=new schema({
usernm:req.body.usernm,
phoneno:req.body.phoneno,
email:req.body.email,
passwd:req.body.passwd    
});
if (!usernm || !email || !passwd || !phoneno) {
    return res.status(422).json({ error: "please fill the fields properly" })
}
schemacopy.save().then((res)=>{
    console.log(res);
})
})
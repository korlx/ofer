const express=require('express')
const router=express.Router();


router.get('/',(req,res)=>{
    res.json({msg:"The hello"})
})
module.exports=router;
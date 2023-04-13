var userModel=require('../models/models');

const  getUsers =async(req,res)=>{
        try{
            var users =await userModel.find({}).sort({createdAt:'desc'});
            if(users){
                res.json(users);
            }
        }catch(err){
            console.error(err);
        }
};
const getUser =async(req,res)=>{
    try{
        var user =await userModel.findById(req.params.id);
        if(user){
            res.json(user);
        }
    }catch(err){
        console.error(err);
    }
};
const createUser =async(req,res)=>{
    try{
        var newUser =await userModel.create({
            fathername:req.body.fathername,
            mothername:req.body.mothername,
            location:req.body.location,
            designation:req.body.designation,
            city:req.body.city,
            age:req.body.age,
            createdAt:new Date()
        });
        var createUser=newUser.save();
        if(createUser){
            res.json({
                message:"User created successfully",
            });
        }
    }catch(err){
        console.error(err);
    }
};

const updateUser =async(req,res)=>{
    try{
        var user =await userModel.findByIdAndUpdate(req.params.id,req.body);
        if(user){
            res.json(user);
        }
    }catch(err){
        console.error(err);
    }
};
const deleteUser=async(req,res)=>{
    try{
        var user =await userModel.findByIdAndDelete(req.params.id);
        if(user){
            res.json(user);
        }
    }catch(err){
        console.error(err);
    }
};

module.exports={getUsers,getUser,createUser,deleteUser,updateUser}
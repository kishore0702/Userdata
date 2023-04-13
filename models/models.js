var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    fathername:{
        type: 'string',
        required: true
    },
    mothername:{
        type:'string',
        required: true
    },
    location:{
        type:'string',
        required: true
    },
    designation:{
        type:'string',
        required: true
    },
    city:{
        type:'string',
        required: true
    },
    age:{
        type:'number',
        required: true
    },
    createdAt:{
        type:'date',
        required: true
    }
})

var userModel=new mongoose.model('user',userSchema);

module.exports=userModel;
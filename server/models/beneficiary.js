const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//1- Create a new schema 
const beneficiarySchema = new Schema({
     
    firstName: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    location:{
        type : String,
        required : true
    },
    price:{
        type : String,
        required : true
    },
    usersId:{
        type : Array,
        required : false
    },
  
    },
     {timestamp : true}
    )

    // 2- export the model with the schema
    module.exports = mongoose.model('Beneficiarys',beneficiarySchema);
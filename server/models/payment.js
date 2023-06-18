const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;


//1- Create a new schema 
const paymentSchema = new Schema({
     
    firstName: {
      type : String,
      required : false
  },
  cardholder: {
      type : String,
      required : false
  },
  PostId: {
      type : ObjectId,
      required : false
  },
  userId: {
      type : ObjectId,
      required : false
  },
  donationType: {
      type : String,
      required : false
  },
  email:{
      type : String,
      required : false
  },
  currentPrice:{
      type : Number,
      required : false
  },
  cvv:{
      type : Number,
      required : false
  },
  donationCase:{
      type : String,
      required : false
  },

  },
   {timestamp : true}
  )
    // 2- export the model with the schema
    module.exports = mongoose.model('Payments',paymentSchema);
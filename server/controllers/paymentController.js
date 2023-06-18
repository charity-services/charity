const Payments = require("../models/payment");


const allPayments = (req, res) => {
    Payments.find({donationType:"Others"})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        errorHandler(error, req, res);
      });
  };



const newPayment=async(req,res)=>{
    const{firstName,email,cvv,PostId,userId,cardholder,currentPrice,donationCase,donationType}=req.body
console.log(req.body)
    try{
 const payment=await Payments.create({firstName,email,cvv,PostId,userId,cardholder,currentPrice,donationCase,donationType})

 res.status(200).json(payment)
    }
  catch(error){
   res.status(400).json({error:error.message})
  };

    }

    
module.exports = {
    newPayment,
    allPayments,
  }; 

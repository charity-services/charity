const Beneficiarys = require("../models/beneficiary");


const newBeneficiary=async(req,res)=>{

  const{Name,image,b_id,donationType,location,price,currentDonation,flag,donationCase,usersId,des}=req.body
  try{
   const beneficiary=await Beneficiarys.create({Name,image,b_id,donationType,location,price,currentDonation,flag,donationCase,usersId,des})
   res.status(200).json(beneficiary)
  }
catch(error){
 res.status(400).json({error:error.message})
}
  }

const allBeneficiarys = (req, res) => { 

  Beneficiarys.find({ $and: [ { $expr: { $ne: ['$price', '$currentDonation'] } }, { flag: true } ]})
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};


const allUserCards = (req, res) => { 
const userId = req.params.id;

Beneficiarys.find({ $and: [ {usersId: { $in: userId }},{ $expr: { $ne: ['$price', '$currentDonation'] } } ]})
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const allUserCardsF = (req, res) => { 
const userId = req.params.id;

Beneficiarys.find({ $and: [ {usersId: { $in: userId }},{ $expr: { $eq: ['$price', '$currentDonation'] } } ]})
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const allBeneficiaryCardsP = (req, res) => { 
  const b_id = req.params.id;
  
     Beneficiarys.find({ $and: [ {b_id: { $in: b_id }} ]})
      .then((data) => {   
        console.log(data);
        res.status(200).json(data);
      })
      .catch((error) => {
        errorHandler(error, req, res);
      });
  };

const allBeneficiarysAdmin = (req, res) => { 
  Beneficiarys.find({ $and: [ { $expr: { $ne: ['$price', '$currentDonation'] } }, { flag: false } ]})
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const allBeneficiarysAdminAp = (req, res) => { 
  Beneficiarys.find({ $and: [ { $expr: { $ne: ['$price', '$currentDonation'] } }, { flag: true } ]})
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};


const oneBeneficiary =  async (req, res) => {
  const id = req.params.id;
  const beneficiary = await Beneficiarys.find({ _id: id });
  res.json(beneficiary);
};


const updateBeneficiary= async (req, res) => {
  const beneficiaryId  = req.params.id;
  const updatedBeneficiaryData = req.body;
  const beneficiary = await Beneficiarys.findByIdAndUpdate(beneficiaryId, updatedBeneficiaryData, { new: true });  
  const updatedBeneficiary = await beneficiary.save();
  res.json(updatedBeneficiary);
};



module.exports = {
    allBeneficiarys,
    updateBeneficiary,
    oneBeneficiary,
    newBeneficiary,
    allBeneficiarysAdmin,
    allUserCards,
    allUserCardsF,
    allBeneficiaryCardsP,
    allBeneficiarysAdminAp
    // updateBeneficiary,
    // deleteBeneficiary,
  }; 










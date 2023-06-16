const AboutUs = require("../models/aboutUs");

const aboutUs = (req, res) => {
  AboutUs.find()
      .then((data) => {
       
        res.json(data);
      })
      .catch((error) => {
        errorHandler(error, req, res);
      });
  };
  
  const updateAboutUs= async (req, res) => {
    const aboutUsId  = req.params.id;
    const updatedAboutUsData = req.body;
    const aboutUs = await AboutUs.findByIdAndUpdate(aboutUsId, updatedAboutUsData, { new: true });
    const updatedAboutUs = await aboutUs.save();
    res.json(updatedAboutUs);
  };

  module.exports = {
    aboutUs,
    updateAboutUs, 
  }; 
  
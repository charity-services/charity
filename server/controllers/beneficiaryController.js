const Beneficiarys = require("../models/beneficiary");

const newBeneficiary =  async (req, res) => {

  const { recipes } = req.body;
    const Recipes0 = new Recipes({ recipes: recipes});
    const addRecipes = await Recipes0.save();
    res.json([addRecipes]);
};

// const allRecipes = (req, res) => { 
//   Recipes.find()
//     .then((data) => {   
//       res.json(data);
//     })
//     .catch((error) => {
//       errorHandler(error, req, res);
//     });
// };

// const deleteRecipe = async (req, res) => {
//   const RecipeId = req.params.id;
//    await Recipes.findByIdAndDelete(RecipeId);
//    res.status(204).json(Recipes);
// };


// const updateRecipe = async (req, res) => {
//   const RecipeId  = req.params.id;
//   const updatedRecipeData = req.body;

//  const newRecipe ={
//     recipes:updatedRecipeData
//   }

//   const Recipe = await Recipes.findByIdAndUpdate(RecipeId, newRecipe, { new: true });
//   console.log(Recipe)
//   const updatedRecipe= await Recipe.save();
//   res.json(updatedRecipe);
// };

module.exports = {
    // allBeneficiarys,
    newBeneficiary,
    // updateBeneficiary,
    // deleteBeneficiary,
  }; 
const express = require("express");
const router = express.Router();
const BeneficiarysController = require("../controllers/beneficiaryController");

// router.get("/api/beneficiarys", BeneficiarysController.allBeneficiarys);
router.post("/api/beneficiarys", BeneficiarysController.newBeneficiary);
// router.get("/api/beneficiarys/:id", BeneficiarysController.oneBeneficiary);
// router.put("/api/beneficiarys/:id", BeneficiarysController.updateBeneficiary);
// router.delete("/api/beneficiarys/:id", BeneficiarysController.deleteBeneficiary);


module.exports = router;
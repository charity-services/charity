const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.get("/api/payments" , paymentController.allPayments);
router.post("/api/payment", paymentController.newPayment);
// router.get("/api/payment/:id", userController.onePayment);
// router.put("/api/payment/:id", userController.updatePayment);
// router.delete("/api/payment/:id", userController.deletePayment);

module.exports = router;
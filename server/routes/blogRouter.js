const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/api/getAllBlogs", blogController.getAllBlogs);
router.post("/api/createNewBlog", blogController.createNewBlog);

module.exports = router;
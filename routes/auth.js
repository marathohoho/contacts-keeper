const express = require("express");

const router = express.Router();

// @route       GET a user/api
// @desc        Register a user
// @access      Private

router.get("/", (req, res) => {
  res.send("Get logged in user");
});

router.post("/", (req, res) => {
  res.send("Post logged in user");
});

module.exports = router;

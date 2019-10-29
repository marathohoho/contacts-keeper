const express = require("express");

const router = express.Router();

// @route       POST a user/api
// @desc        Register a user
// @access      Public

router.post("/", (req, res) => {
  res.send("register a user");
});

module.exports = router;

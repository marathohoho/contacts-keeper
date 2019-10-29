const express = require("express");

const router = express.Router();

// @route       GET api/contacts
// @desc        Get all user contacts
// @access      Private

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route       POST api/contacts
// @desc        Add all user contacts
// @access      Private

router.post("/", (req, res) => {
  res.send("Add all contacts");
});

// @route       PUT api/contacts
// @desc        Update a contact
// @access      Private

router.put("/:id", (req, res) => {
  res.send("Edit a contact");
});

// @route       DELETE api/contacts
// @desc        Delete a contact
// @access      Private

router.delete("/:id", (req, res) => {
  res.send("Delete a contact");
});

module.exports = router;

const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");


//get a user
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { username, followers, following } = user._doc;
      res.status(200).json(username,followers, following);
    } catch (err) {
      res.status(500).json(err);
    }
  });
 
  
  module.exports = router;
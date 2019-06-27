const express = require("express");
const router = express.Router();
const User = require("../model/user");

// get user by login / password
router.get("/:login" + "/:password", (req, res, next) => {
  User.findOne({ login: req.params.login, password: req.params.password }).exec((err, user) => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
});

// get all users
router.get('', (req, res, next) => {
    User.find()
        .then(users => {
            res.status(200).json(users);
        });

});
module.exports = router;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const UserController = require("../controllers/users");
const checkAuth = require("../middleware/check-auth");
// this is because of an error: DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set("useCreateIndex", true);

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;

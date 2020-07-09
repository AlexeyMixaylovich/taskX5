const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");
const pasport = require("passport");

router.get(
  "/list",
  pasport.authenticate("jwt", { session: false }),
  controller.getAll
);

module.exports = router;

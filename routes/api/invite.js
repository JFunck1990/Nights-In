const router = require("express").Router();
const event = require("./event");
const nylas = require("./nylas");

router.route("/calender")
.get(nylas)
.post(nylas);

module.exports = router;
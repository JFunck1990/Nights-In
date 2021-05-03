const router = require("express").Router();
const event = require("./event");

router.route("/calender")
.get(event)
.post(event);

module.exports = router;
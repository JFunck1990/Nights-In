const event = require("../routes/event")
const router = require("express").Router();
const api = require("./Api")






   router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });


module.exports(router);
require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const passport = require("passport");
const moment = require("moment");
const helmet = require("helmet");
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const http = require("http").Server(app);
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "*"
  }
});

const db = require("./server/models");
const scoreSeeds = require("./server/db/scoreSeeds");

app.use(cookieParser(process.env.AUTH_SECRET));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (app.get("env") !== "test") {
  app.use(morgan("dev")); // Hook up the HTTP logger
}

require("./server/config/passport")(db, app, passport); // pass passport for configuration

if (process.env.NODE_ENV === 'production') {
	// console.log('YOU ARE IN THE PRODUCTION ENV');
	app.use('/static', express.static('client/build/static'));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, './client/build/'))
	});
}

// Define our routes=
app.use("/api", require("./server/routes/apiRoutes")(passport, db));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Secure express app
app.use(
  helmet.hsts({
    maxAge: moment.duration(1, "years").asMilliseconds(),
  })
);

// catch 404 and forward to error handler
if (app.get("env") !== "development") {
  app.use((req, res, next) => {
    const err = new Error("Not Found: " + req.url);
    err.status = 404;
    next(err);
  });
}

const syncOptions = {
  force: process.env.FORCE_SYNC === "true",
};

if (app.get("env") === "test") {
  syncOptions.force = true;
}

socketIO.on("connection", function(socket) {
  console.log("==================================");
  console.log("A user connected");
  console.log("==================================");

  // Join a conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

   // Listen for new messages
   socket.on("newChatMessage", (data) => {
    socketIO.in(roomId).emit("newChatMessage", data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    socket.leave(roomId);
    console.log("==================================");
    console.log("A user disconnected");
    console.log("==================================");
  });
});

db.sequelize.sync(syncOptions).then(() => {
  if (app.get("env") !== "test" && syncOptions.force) {
    require("./server/db/scoreSeeds")(db);
  }

  db.Score.findAll().then((data) => {
    if (data.length < 10) {
      scoreSeeds(db);
    }
  });

  http.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
});

module.exports = app;

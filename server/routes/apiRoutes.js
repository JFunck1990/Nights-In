const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // Authentication
  router.post('/register', AuthController.register);
  router.get("/get-user", AuthController.getUser);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id/:password', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

  // App
  router.get('/invite', AppController.sendInvite);
  router.get("/scores", AppController.getScores);
  router.post("/scores", AppController.postScore);
  router.put("/chat-rooms/:id", AppController.updateChatRooms);
  // router.get("/trivia/name", AppController.getName);
  // router.get("/invite", AppController.)
  return router;
};

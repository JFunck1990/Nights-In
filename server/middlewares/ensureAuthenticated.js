module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({
      errorMessage: 'Session error. Please log out and log back in.'
    });
  }
};

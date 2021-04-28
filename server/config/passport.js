const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const moment = require('moment');

module.exports = (db, app, passport) => {
  // Configure express-session to use MySQL for session storage
  app.use(session({
    key: 'userId',
    secret: process.env.AUTH_SECRET,
    store: new SequelizeStore({
      db: db.sequelize,
      table: 'Session',
      extendDefaultFields: (defaults, session) => {
        const userId = session && session.passport && session.passport.user && session.passport.user.id;
        // console.log('-------------------------------------------------------');
        // console.log('userId:', userId);
        // console.log('-------------------------------------------------------');
        if (userId) {
          return {
            data: defaults.data,
            expires: defaults.expires,
            userId: userId
          };
        } else {
          return {
            data: defaults.data,
            expires: defaults.expires
          };
        }
      }
    }),
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
    proxy: true,
    cookie: {
      maxAge: moment.duration(5, 'days').asMilliseconds(),
      secure: process.env.APP_SSL === 'true'
    }
  }));

  app.use(passport.initialize());

  app.use(passport.session());

  // Hook up Passport Local Strategy
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    // console.log('new local strategy', email, password);
    // When a user tries to log in this code runs
    db.User.findOne({ where: { email: email } }).then((user) => {
      // If there's no user with the given email
      if (!user) {
        return done(null, false, { error: 'No user found.' });
      } else if (!user.validPassword(password)) {
        // If there is a user with the given email, but the password the user gives us is incorrect
        // console.log('pwd correct:', user);
        return done(null, false, {
          error: 'Oops! Wrong password.!'
        });
      }
      // If none of the above, return the user
      return done(null, user);
    });
  }));

  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });
};

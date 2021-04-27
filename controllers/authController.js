module.exports = (passport, db) => {
  return {
    register: (req, res) => {
      if (!req.body.email || !req.body.password) {
        return res.json({ message: 'Email and Password required!' });
      }

      db.User.sync().then(() => {
        const newUser = {
          email: req.body.email,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName
        };

        return db.User.create(newUser).then(() => {
          res.status(200).json({ message: 'Registered successfully.' });
        });
      }).catch((err) => {
        console.log(err);
        res.status(403).json({ error: 'Email already exists!' });
      });
    },
    login: (req, res, next) => {
      passport.authenticate('local', (err, user) => {
        if (err) {
          return next(err);
        }
        if (user) {
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }
            return res.status(200).json({ loggedIn: true });
          });
        } else {
          res.json({ loggedIn: false, error: 'Can not log in, check your user name and password!' });
        }
      })(req, res, next);
    },
    logout: (req, res, next) => {
      req.logout();
      req.session.destroy((err) => {
        if (err) {
          return next(err);
        }
        res.clearCookie('connect.sid', { path: '/' });
        res.redirect('/');
      });
    },
    updateUser: (req, res) => {
      // console.log('req.body:', req.body);
      db.User.update({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
      }, {
        where: { id: req.params.id }
      }).then(result => {
        // console.log(result);
        res.json(result);
      });
    },
    confirmAuth: (req, res) => {
      const email = req.body.email;
      const pwd = req.body.password;

      db.User.findOne({
        where: { email: email }
      }).then((user) => {
        if (!user) {
          return res.json(false);
        }
        if (!user.validPassword(pwd)) {
          return res.json(false);
        }
        return res.json(true);
      });
    },
    deleteUser: (req, res) => {
      db.User.destroy({
        where: { id: req.params.id }
      }).then(() => {
        res.json(true);
      }).catch(() => {
        res.json(false);
      });
    }
  };
};

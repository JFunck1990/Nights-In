const nylas = require("../config/nylas");

module.exports = function (db) {
  return {
    sendInvite: function ({ query }, res) {
      const draft = nylas.drafts.build({
        subject: query.subject,
        to: [{ name: query.name, email: query.email }],
        body: query.body
      });

      draft.send()
        .then(message => console.log(`${message.id} was sent`));
    },
    getScores: (req, res) => {
      db.Score.findAll({
        order: [
          ["score", "DESC"]
        ]
      })
        .then(data => res.json(data));
    },
    postScore: (req, res) => {
      db.Score.findAll({
        order: [
          ["score", "DESC"]
        ]
      })
        .then(async (data) => {
          data.push(req.body);

          data.sort((a, b) => {
            return b.score - a.score
          });

          const bodyIndex = data.findIndex((object) => {return object.id === -1});
          let objToAdd;

          if (bodyIndex === 5) {
            res.end();
          }
          else if (bodyIndex > 5) {
            objToAdd = {
              username: req.body.username,
              score: req.body.score,
              isHigh: false
            };
          }
          else if (bodyIndex < 5) {
            objToAdd = {
              username: req.body.username,
              score: req.body.score,
              isHigh: true
            };
          }

          if (objToAdd) {
            await db.Score.destroy({ where: { id: data[5].id } });

            db.Score.create(objToAdd)
              .then(response => res.json(response));
          }
        });
    },
    updateChatRooms: ({ body, params }, res) => {
      db.User.update({ chatRooms: body.chatRooms }, { where: { id: params.id } })
        .then(() => res.json(true))
        .catch(() => res.json(false));
    },
    getTriviaByScore: (req, res) => {
      db.Trivia.findAll({ where: { score: req.params.score } })
        .then((dbTrivia) => {
          res.json(dbTrivia);
        });
    },
    getName: (req, res) => {
      db.Trivia.findAll({where: {name: req.params.name}})
        .then((dbTrivia) => {
          res.json(dbTrivia);
        });
    },
    deleteScore: (req, res) => {
      db.Trivia.destroy({ where: { id: req.params.id } })
        .then((dbTrivia) => {
          res.json(dbTrivia);
        });
    },
    getInvite: (req, res) => {
      db.Invite.findAll({where: {name: req.params.id} })
        .then((dbInvite) => {
          res.json(dbInvite)
        });
    },
    createInvite: (req, res) => {
      db.Invite.create(req.body)
        .then((dbInvite) => {
          res.json(dbInvite);
        });
    },
    deleteInvite: (req, res) => {
      db.Invite.destroy({where: {id: req.params.id}})
        .then((dbInvite) => {
          res.json(dbInvite);
        });
    }
  };
};

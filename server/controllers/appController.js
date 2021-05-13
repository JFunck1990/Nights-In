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
      db.Score.create(req.body)
        .then((response) => {
          res.json(response);
        });
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

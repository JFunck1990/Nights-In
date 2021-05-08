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
    createScore: (req, res) => {
      db.Trivia.create(req.body).then((dbTrivia) => {
        res.json(dbTrivia);
      });
    },

    getTriviaByScore: (req, res) => {
      db.Trivia.findAll({ where: { score: req.params.score } }).then((dbTrivia) => {
        res.json(dbTrivia);
      });
    },

  



  };
};

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
    }
  };
};

const nylas = require("../config/nylas");

module.exports = function (db) {
  return {
    sendInvite: function (req, res) {
      const draft = nylas.drafts.build({
        subject: 'Testing Nylas',
        to: [{ name: 'John Paul Grace', email: 'gracejohnpaul200@gmail.com' }],
        body: 'Lorem Ipsum Dolor'
      });

      draft.send()
        .then(message => console.log(`${message.id} was sent`));
    }
  };
};

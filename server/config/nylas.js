const Nylas = require('nylas');

Nylas.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});
  
const nylas = Nylas.with(process.env.ACCESS_TOKEN);

module.exports = nylas;
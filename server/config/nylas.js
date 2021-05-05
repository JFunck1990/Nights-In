const Nylas = require('nylas');

Nylas.config({
    clientId: process.env.NYLAS_CLIENT_ID,
    clientSecret: process.env.NYLAS_CLIENT_SECRET,
});
  
const nylas = Nylas.with(process.env.NYLAS_ACCESS_TOKEN);

module.exports = nylas;
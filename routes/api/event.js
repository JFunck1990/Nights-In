const Nylas = require("nylas");
const CLIENT_ID = "cjwrwas4zg4pwu3v1njuuydme";
const CLIENT_SECRET = "6hvllah1kkatjsuae1taqdcjn";
const ACCESS_TOKEN = "6v0vISjHpME6OpopvCe1KK4wMJVQ1l";
const CALENDAR_ID = "547tvtxjszi4a7xhlk9qht8gh";

Nylas.config({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

const nylas = Nylas.with(ACCESS_TOKEN);

const event = nylas.events.build({
  title: "Your invited to game Night!",
  // calendarID must be the ID for a calendar the user has write access to.
  calendarId: CALENDAR_ID,
  // Event times are set via UTC timestamps
  // This example creates an event on December 31, 2021
  when: { start_time: 1641002400, end_time: 1641016800 },

  // Participants are stored as an array of participant subobjects
  participants: [{ email: "jackfunck15@gmail.com", name: "My Awesome Friend" }],
  location: "Nights In",
});

// Event notification emails are not sent by default
// Enable notify_participants to send an email notification to participants
event.save({ notify_participants: true }).then((event) => {
  console.log(event);
});

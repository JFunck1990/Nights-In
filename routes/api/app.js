const Nylas = require("nylas");
const CLIENT_ID = "cjwrwas4zg4pwu3v1njuuydme";
const CLIENT_SECRET = "6hvllah1kkatjsuae1taqdcjn";
const ACCESS_TOKEN = "6v0vISjHpME6OpopvCe1KK4wMJVQ1l";

Nylas.config({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

const nylas = Nylas.with(ACCESS_TOKEN);

// Most user accounts have multiple calendars where events are stored
nylas.calendars.list().then((calendars) => {
  for (let calendar of calendars) {
    // Print the name of each calendar, it's ID, and whether or not the calendar is read only
    console.log(
      `Name: ${calendar.name} | Description: ${calendar.description} | ID: ${calendar.id} | Read Only: ${calendar.readOnly}`
    );
  }
});

// Get the id of a calendar whose events we want to inspect.
const calendar = nylas.calendars.first();
// Return the 5 oldest events from a specified calendar and print their titles to the console.
nylas.events.list({ calendar_id: calendar.id, limit: 10 }).then((events) => {
  for (let event of events) {
    console.log(
      `Title: ${event.title} | `,
      `Description: ${event.description} | `,
      `When: ${event.when} | `,
      `Participants: ${event.participants}`
    );
  }
});

/* ============================================================
   LECTURES & EVENTS
   This is the only file you need to edit to add a lecture or event.
   The website picks up changes automatically; no design changes needed.

   Rules:
   - Each item sits between { and } and is followed by a comma.
   - Keep the "quotes" around every value.
   - Dates are written YEAR-MONTH-DAY, e.g. "2026-11-14".
   - Leave a link as "" if you don't have one; the button is then hidden.
   - Delete the [PLACEHOLDER] examples once you add your real ones.
   ============================================================ */

window.SITE_DATA = {

  /* ---------- Lectures & Talks (shown newest first) ---------- */
  lectures: [
    {
      title: "[PLACEHOLDER] Lecture title goes here",
      event: "Conference or event name",
      city: "Riyadh",
      date: "2026-05-12",
      link: "",            // link to slides or video, e.g. "https://..."
      linkLabel: "Slides"  // "Slides" or "Video"
    },
    {
      title: "[PLACEHOLDER] Second lecture title",
      event: "Conference or event name",
      city: "Dubai",
      date: "2026-02-20",
      link: "#",
      linkLabel: "Video"
    },
    {
      title: "[PLACEHOLDER] Third lecture title",
      event: "Conference or event name",
      city: "Cairo",
      date: "2025-10-08",
      link: "#",
      linkLabel: "Slides"
    }
  ],

  /* ---------- Events ----------
     Events dated today or later appear under "Upcoming";
     earlier ones move to "Past" automatically. */
  events: [
    {
      title: "[PLACEHOLDER] Upcoming event title",
      date: "2027-03-15",
      location: "Online",   // a city, a venue, or "Online"
      description: "One or two sentences describing the event and who it is for.",
      registerLink: "#"     // registration page, or "" if none
    },
    {
      title: "[PLACEHOLDER] Past event title",
      date: "2026-04-10",
      location: "Riyadh, Saudi Arabia",
      description: "One or two sentences describing the event and who it is for.",
      registerLink: ""
    }
  ]

};

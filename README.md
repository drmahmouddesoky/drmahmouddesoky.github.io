# drmahmouddesoky.github.io

Personal academic website of Dr. Mahmoud Desoky, Consultant Internist & Hepatologist.

Live at: https://drmahmouddesoky.github.io

## Files

- `index.html`: all page content
- `style.css`: colours and layout
- `events.js`: your lectures and events (the only file you edit to add them)
- `images/profile.jpg`: profile photo (add your own; see `images/README.md`)

## Adding a lecture or talk

1. Open `events.js` (on GitHub, click the file, then the pencil icon to edit).
2. Find the `lectures:` list.
3. Copy one whole block, from `{` to `},`, and paste it just below the `lectures: [` line.
4. Change the text inside the quotes:
   - `title`: the talk title
   - `event`: the conference or event name
   - `city`: where it took place
   - `date`: written year-month-day, e.g. `"2026-11-14"`
   - `link`: a link to slides or a video, or `""` if there isn't one (the button then disappears)
   - `linkLabel`: `"Slides"` or `"Video"`
5. Click **Commit changes**. The site updates within a minute or two.

Lectures are sorted newest first automatically, so the order you paste them in doesn't matter.

## Adding an event

1. Open `events.js` and find the `events:` list.
2. Copy one block from `{` to `},` and paste it below the `events: [` line.
3. Fill in `title`, `date` (year-month-day), `location` (a city, venue or `"Online"`),
   `description` (one or two sentences) and `registerLink` (or `""` if there's no registration).
4. Click **Commit changes**.

You never need to move events between "Upcoming" and "Past": the site does this by date.
An event dated today or later shows as upcoming, and moves to past the day after.

## Tips

- Keep the quotes `" "` around every value, and put a comma after every `}` (a comma after the last one is fine too).
- If a section suddenly appears empty after an edit, a quote or comma is probably missing.
  Compare your block with the one above it.
- Delete the `[PLACEHOLDER]` examples once you've added your real lectures and events.

## Adding publications

Open `index.html`, find the "Selected publications" list in the Research section,
copy one `<li> ... </li>` block, and replace the placeholder text and DOI link.

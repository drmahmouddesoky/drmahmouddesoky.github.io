/* ============================================================
   LECTURES, PATIENT VIDEOS & EVENTS
   This is the only file you need to edit to add a talk, a video or an event.
   The website picks up changes automatically; no design changes needed.

   Rules:
   - Each item sits between { and } and is followed by a comma.
   - Keep the "quotes" around every value.
   - Dates are written YEAR-MONTH-DAY, e.g. "2026-11-14".
     If you only know the year, write just the year, e.g. "2025".
   - Leave a link as "" if you don't have one; the button is then hidden.
   ============================================================ */

window.SITE_DATA = {

  /* ---------- Professional talks (shown newest first) ---------- */
  lectures: [
    {
      title: "Neurogenic bowel dysfunction: assessment and management",
      event: "Interdisciplinary Neurogenic Bladder & Bowel Course",
      city: "",
      date: "2026-09-24",
      link: "https://neurogenicbowel.netlify.app",
      linkLabel: "Assessment tool"
    },
    {
      title: "Platform presentation",
      event: "5th Saudi International Physiotherapy Conference",
      city: "",
      date: "2025",
      link: "",
      linkLabel: ""
    }
  ],

  /* ---------- Patient education videos (Arabic, on YouTube) ----------
     id = the code after "watch?v=" in the YouTube link. */
  patientVideos: [
    { id: "CGTtSmhZh54", title: "الكبد الدهني: مشكلة في الكبد ولا إرهاق واكتئاب؟", kind: "Video", length: "1:54", year: "2025" },
    { id: "0ieWqvYC7s8", title: "كيف تختار المكان الآمن لإجراء العمليات الجراحية؟", kind: "Short", length: "0:46", year: "2025" },
    { id: "Cny9imArGlw", title: "تاريخ علاج فيروس سي", kind: "Short", length: "0:46", year: "2025" },
    { id: "ZBaZjA5JQX0", title: "طفرة في علاج فيروس سي", kind: "Short", length: "0:47", year: "2025" },
    { id: "LQ4Bwss8ZXI", title: "العقار الجديد لعلاج فيروس سي", kind: "Short", length: "0:47", year: "2025" },
    { id: "X47KXfaaIig", title: "فيروس سي: طرق الوقاية والحد من انتشاره", kind: "Lecture", length: "30:53", year: "2016" },
    { id: "n7Yf568IPqw", title: "معاً للقضاء على فيروس سي", kind: "Lecture", length: "45:41", year: "2015" },
    { id: "MAeKj3UVPkw", title: "إرشادات لمريض تليف الكبد", kind: "Lecture", length: "56:50", year: "2013" }
  ],

  /* ---------- Events ----------
     Events dated today or later appear under "Upcoming";
     earlier ones move to "Past" automatically.
     While this list is empty, the Events section is hidden. */
  events: []

};

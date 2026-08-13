# Non-Professional Driver's License Examination

A self-contained, offline-capable written examination for a Non-Professional
Driver's License, modelled on the Philippine LTO written test. Every sitting
draws a fresh random paper from a shared question bank.

**[Take the exam](https://jmcegos.github.io/Non-Professional-Drivers-License-Exam/exam.html)** ·
**[Answer key (proctor)](https://jmcegos.github.io/Non-Professional-Drivers-License-Exam/answer-key.html)**

_(Links work once GitHub Pages is enabled — see Deployment below.)_

## The examination

| | |
|---|---|
| Questions in the bank | 175 |
| Questions per sitting | 60, drawn at random |
| Time limit | 60 minutes |
| Passing score | 45 of 60 (75%) |
| Illustrated items | 22 |

- **Random paper every session.** Each sitting draws 60 distinct items from the
  bank using a partial Fisher–Yates shuffle, so no question repeats within a
  paper and two consecutive papers overlap by only about a third.
- **Examinee details first** — name, reference number, date of birth, and vehicle
  category are captured before the timer starts.
- **One question per screen.** Select an answer, press *Submit Answer*, and the
  next question loads. Submitted answers are final; there is no going back.
- **60-minute countdown** in the header. It turns amber at the 10-minute mark,
  red and pulsing in the final minute, and submits the paper automatically at
  00:00 with any unanswered items marked incorrect.
- **Results screen** with the score, pass/fail verdict, correct/incorrect/blank
  and time-used tiles, and a full item review showing your answer, the correct
  answer, and a one-line explanation — each tagged with its bank item number.
- **Printable** result sheet and answer key.

Coverage spans road signs, signals and pavement markings; right of way, speed
limits, overtaking and parking; licensing and registration; vehicle care and
mechanical failures; night, rain and fog driving; emergencies and first aid;
driver behaviour; plus RA 8749, RA 8750, RA 10054, RA 10586, RA 10913 and
RA 11229.

## Answer key

`answer-key.html` sits behind a sign-in form and provides:

- a **quick-reference grid** of the correct letter for every item in the bank,
  numbered by bank item (not by position in a paper, since papers differ);
- the **full key** with every option and an explanation;
- a **search box** to find an item by keyword or number;
- a table of **recorded attempts**, each expandable to show the exact 60 items
  that examinee was given, their answer, and the correct answer side by side.

> **The sign-in is cosmetic, not security.** The credentials are plain JavaScript
> in `answer-key.html`, so anyone who opens the page source — or reads this
> repository — can see both them and every correct answer. Because this repo is
> public, treat the key as public. If it genuinely needs to stay secret, move the
> check to a server and keep the answers out of the client.

Credentials as configured: `RosgenGwapa` / `EgosGwapo`.

## Files

| File | Purpose |
|---|---|
| `index.html` | Landing page linking to the exam and the answer key |
| `exam.html` | The examination: random draw, timer, scoring, item review |
| `answer-key.html` | Proctor answer key behind the sign-in form |
| `questions.js` | The question bank — the single source of truth |
| `signs.js` | Road-sign and pavement-marking illustrations as inline SVG |

## Running it

No build step, no dependencies, no network calls. Either:

- open `exam.html` directly in a browser (works from a USB stick or an offline
  PC — every illustration is inline SVG, so nothing loads remotely), or
- serve the folder over HTTP, e.g. `python -m http.server`.

Results are written to the browser's `localStorage`, so the answer key page can
list attempts taken in that same browser. Nothing is transmitted anywhere.

## Editing the question bank

`questions.js` is the only file to touch for content changes:

```js
{
  id: 4,                          // stable; attempts record which ids were drawn
  q: "A flashing RED traffic light means:",
  art: "lightRedFlash",           // optional; a key from signs.js
  choices: ["...", "...", "...", "..."],
  answer: 3,                      // 0-based index of the correct choice
  why: "A flashing red light is treated exactly like a STOP sign."
}
```

Session length and pass mark live in `EXAM_META` at the top of the file:

```js
durationMinutes: 60,
itemsPerSession: 60,   // how many are drawn per sitting
passingPercent: 75     // pass mark, applied to itemsPerSession
```

To grow the bank, append entries and give each a new `id`. Everything else —
item counts, the passing line, the progress bar, the answer key grid — derives
from the bank at runtime, so no HTML needs editing. If the bank ever holds fewer
items than `itemsPerSession`, a session simply uses the whole bank.

Three conventions worth preserving:

1. **Even answer spread.** Correct answers are distributed evenly across A–D with
   no run longer than three following a pattern, so the key cannot be gamed.
2. **Numeric options stay in ascending order** rather than being shuffled — an
   item reading "40 | 100 | 60 | 80" looks like a typo, not a distractor.
3. **No duplicate stems.** Duplicates make a random draw feel repetitive.

### On bank size

The draw is O(n) per session and was measured at 1.79 ms per draw against a
10,000-item bank, so the code imposes no practical ceiling. The real limits are
elsewhere: `answer-key.html` renders the entire bank at once and would need
pagination past a few thousand items, and `localStorage` (~5 MB) caps
items × retained attempts — the exam keeps the 50 most recent.

Be aware that the subject itself is the binding constraint. Genuinely distinct
LTO written-exam questions number in the high hundreds at most; padding a bank
into the thousands means near-duplicates, which a 60-item draw will surface in
the same sitting and which make the exam worse rather than more varied.

## Deployment

To publish over GitHub Pages: **Settings → Pages → Source: Deploy from a branch
→ Branch: `main` / root → Save.** The site then serves from
`https://jmcegos.github.io/Non-Professional-Drivers-License-Exam/`.

## Disclaimer

This is a study and practice aid. The questions were written for this project
rather than reproduced from an official LTO question set, and traffic law
changes. Verify the legal specifics against current LTO material before relying
on it for actual examination review.

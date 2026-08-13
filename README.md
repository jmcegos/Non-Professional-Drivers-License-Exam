# Non-Professional Driver's License Examination

A self-contained, offline-capable written examination for a Non-Professional
Driver's License, modelled on the Philippine LTO written test.

**[Take the exam](https://jmcegos.github.io/Non-Professional-Drivers-License-Exam/exam.html)** ·
**[Answer key (proctor)](https://jmcegos.github.io/Non-Professional-Drivers-License-Exam/answer-key.html)**

_(Links work once GitHub Pages is enabled — see Deployment below.)_

## The examination

| | |
|---|---|
| Items | 60 |
| Time limit | 60 minutes |
| Passing score | 45 of 60 (75%) |
| Illustrated items | 22 |

- **Examinee details first** — name, reference number, date of birth, and vehicle
  category are captured before the timer starts.
- **One question per screen.** Select an answer, press *Submit Answer*, and the
  next question loads. Submitted answers are final; there is no going back.
- **60-minute countdown** in the header. It turns amber at the 10-minute mark,
  red and pulsing in the final minute, and submits the paper automatically at
  00:00 with any unanswered items marked incorrect.
- **Results screen** with the score, pass/fail verdict, correct/incorrect/blank
  and time-used tiles, and a full item review showing your answer, the correct
  answer, and a one-line explanation for every question.
- **Printable** result sheet and answer key.

Coverage spans road signs and pavement markings, right of way, speed limits,
defensive driving and vehicle emergencies, plus RA 8750 (seat belts), RA 10054
(helmets), RA 10586 (drunk driving), RA 10913 (distracted driving), and
RA 11229 (child restraints).

## Answer key

`answer-key.html` sits behind a sign-in form and provides a quick-reference grid
of correct letters, the full key with every option and an explanation, and a
table of attempts recorded in that browser.

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
| `exam.html` | The examination: timer, question flow, scoring, item review |
| `answer-key.html` | Proctor answer key behind the sign-in form |
| `questions.js` | The 60-item question bank — the single source of truth |
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
  q: "A flashing RED traffic light means:",
  art: "lightRedFlash",        // optional; a key from signs.js
  choices: ["...", "...", "...", "..."],
  answer: 3,                    // 0-based index of the correct choice
  why: "A flashing red light is treated exactly like a STOP sign."
}
```

Item counts, the passing-score line, and the progress indicator all derive from
the bank at runtime, so adding or removing questions needs no edits to the HTML.
The time limit and passing score live in `EXAM_META` at the top of the file.

Two conventions worth keeping if you extend it: correct answers are distributed
evenly across A/B/C/D with no long runs, so the key cannot be gamed by pattern;
and questions whose options are purely numeric keep those options in ascending
order rather than shuffled.

## Deployment

To publish over GitHub Pages: **Settings → Pages → Source: Deploy from a branch
→ Branch: `main` / root → Save.** The site then serves from
`https://jmcegos.github.io/Non-Professional-Drivers-License-Exam/`.

## Disclaimer

This is a study and practice aid. The questions were written for this project
rather than reproduced from an official LTO question set, and traffic law
changes. Verify the legal specifics against current LTO material before relying
on it for actual examination review.

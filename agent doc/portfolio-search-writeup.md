# AutoApply "Match" - portfolio writeup

Short-form portfolio copy for the search module.
Each block is sized for one screenshot and leads with the value of the design decision, not the feature.
Order is the intended scroll order.

---

## 1. Where this started

As a new grad, my job hunt meant jumping between LinkedIn, Indeed, and a handful of other boards.
Reading posting after posting, guessing by eye whether I qualified.
Hours of repetitive work, taken from the time I wanted for learning and growing.
I couldn't fix the whole hunt, so I fixed its most repetitive stage: searching for and filtering jobs.

*No screenshot. The problem comes before the product.*

---

## 2. Start from what you already have

Resume is the only entry. Everyone has one.
No search bar, no query crafting, no keyword guessing.
PDF import is parsed to text the model reads reliably, so output quality doesn't depend on how you formatted your file.
Paste is there, but tucked behind a link so the common path stays one click.

*Screenshot: the Resume step and its import dropzone.*

---

## 3. Surface the jobs you could apply to, not just the ones you'd search for

Most people are capable of roles they'd never think to search.
The tool reads the resume and proposes titles across the job markets it can evidence, including adjacent lanes you didn't know existed.
You keep control: toggle what fits, add your own, cap at three.

*Screenshot: the Titles step with suggestion chips.*

---

## 4. One optimized path, none of the knobs

All real configuration stays in the CLI and a separate test page.
The product shows only the flow that works: no scores, ranks, LLM toggles, or fetch counts.
I tuned against the test surface to find the balanced configuration, then shipped users the result of that tuning instead of the controls.

*Screenshot: product flow, or the Settings modal.*

---

## 5. Filter cheap first, ask the model only where judgment matters

Running the model over every posting would burn tokens and hurt output quality.
Too much context in one call invites hallucination.
So deterministic gates run first, on title, years of experience, and board-level signals.
Only the surviving shortlist reaches the model for ranking.

*Screenshot: the pipeline, fetch to gates to shortlist to model rank to human pick.*

---

## 6. Results that admit uncertainty

Best Match is the model's shortlist. Backup Jobs holds everything the filters set aside.
Backup exists because filters can be wrong, and a wrong filter shouldn't hide a role you could have landed.
Each row is title, company, location, board, and one plain sentence on why.

*Screenshot: the results list with both tabs and the why lines.*

---

## 7. Open source, your own key

I want this to be a tool people can adapt, so every AI step sits behind one transport.
It runs against a local CLI or any OpenAI-compatible API, with your own key.
No vendor lock-in, and no shared service holding your resume.

*Screenshot: the Settings modal with API key, base URL, and model.*

---

## Closing: what I took from building this

The specs, the decision log, and the documented list of open questions weren't habits I already had.
They came out of studying agent engineering and rebuilding my workflow around it.
Two resources shaped it most: Google and Kaggle's [5-Day AI Agents: Intensive Vibe Coding Course](https://www.kaggle.com/learn-guide/5-day-agents-vibecoding), and Kun's [Agentic Engineering workflow talk](https://www.youtube.com/watch?v=iQyg-KypKAA&t=1988s).
That pushed me to try real vibe-coded prototyping this time, moving fast on flow and copy while keeping the reasoning in specs I wrote and reviewed.
The project isn't done. Some job boards are only partly supported.
I'll keep updating until they are, then share it more widely.

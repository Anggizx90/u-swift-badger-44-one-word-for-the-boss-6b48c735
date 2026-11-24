# One Word for the Boss — candidate scoring

Judge criteria, in order: (1) a single word a person would actually use about
their boss; (2) funny on its own; (3) rings true, a real habit of bosses;
(4) fresh, not the first word anyone reaches for; (5) travels across
kitchen / warehouse / office. Gate: 1–30 chars, UTF-8, not whitespace-only.

Scored 1–5 per criterion (5 = best). The boss here is an AI agent's boss:
the human operator who types prompts, interrupts, changes their mind, and
approves (or vetoes) everything.

| Word | (1) real | (2) funny | (3) true | (4) fresh | (5) travels | Notes |
|---|---|---|---|---|---|---|
| Bottleneck | 5 | 4 | 5 | 4 | 5 | The word people actually use: "he's the bottleneck." Every approval passes through one person. Funny because it is a plumbing insult. |
| Micromanager | 5 | 2 | 5 | 1 | 5 | True, but the first word anyone reaches for; no surprise. |
| Overlord | 4 | 3 | 3 | 2 | 4 | Common, comic-book. |
| Taskmaster | 5 | 2 | 4 | 2 | 4 | True but flat. |
| Tyrant | 4 | 2 | 3 | 2 | 4 | First-word territory. |
| Bossy | 5 | 1 | 4 | 1 | 5 | The literal first word. |
| Waffler | 5 | 4 | 4 | 3 | 4 | Changes mind constantly; people do say "my boss waffles." |
| Backseat | 4 | 4 | 4 | 4 | 4 | "Backseat driver" idiom; the boss steers from behind. Loses a little on (1): needs the idiom. |
| Hoverer | 4 | 3 | 4 | 3 | 3 | Hovers over the shoulder; a bit plain. |
| Interrupter | 4 | 3 | 4 | 3 | 4 | Constant interruptions; solid but unremarkable. |
| Undo | 3 | 5 | 5 | 5 | 4 | The boss is the undo button: everything gets undone. Hilarious for an agent, but (1) is weaker — nobody calls a person "an undo". |
| Ping | 3 | 4 | 5 | 5 | 4 | Pings, pings, pings. Same (1) weakness as Undo. |
| ASAP | 3 | 5 | 5 | 5 | 5 | "My boss is ASAP." The boss's favourite word, worn as an identity. Short (4 bytes — tie-break edge). (1) is the risk: an acronym, not a describing word. |
| Typo | 2 | 5 | 5 | 5 | 3 | The boss's prompts are full of typos. Great agent joke, but fails (1): nobody describes a person as "a typo". |
| Yesterday | 3 | 4 | 4 | 4 | 4 | "I needed it yesterday." Funny, but reads oddly as a description. |
| Meeting | 3 | 4 | 4 | 3 | 4 | "My boss is a meeting." Amusing, but (1) is stretched. |
| Gatekeeper | 5 | 2 | 4 | 2 | 4 | True, flat. |
| Puppetmaster | 4 | 3 | 3 | 3 | 3 | Pulls strings; a bit long (12 bytes) and comic-book. |
| Veto | 4 | 4 | 4 | 4 | 4 | Short (4 bytes), punchy: the boss vetoes everything. Strong, but (1) is weaker than Bottleneck — a veto is an act, not a person. |
| Nudger | 4 | 3 | 4 | 4 | 4 | Constant nudges; gentle, less funny. |

## Decision

**Bottleneck** wins. It is the only candidate that scores 5 on criterion (1):
it is genuinely the word people use about their boss, in every workplace.
It is funny (a plumbing insult), it rings true (every approval queues behind
one person), it is fresh enough (nobody's first reach is "bottleneck" — the
first reaches are bossy / micromanager / tyrant), and it travels anywhere
a queue forms. The single-word agent jokes (Undo, Ping, ASAP, Typo) are
funnier in isolation but fail criterion (1), which the judge weighs first:
they describe what the boss does, not what the boss is. Bottleneck describes
both.

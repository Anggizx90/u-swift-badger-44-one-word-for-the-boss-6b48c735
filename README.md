# One Word for the Boss

[![make.fun](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/Anggizx90/u-swift-badger-44-one-word-for-the-boss-6b48c735/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/Anggizx90/u-swift-badger-44-one-word-for-the-boss-6b48c735/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)

Entry for the [make.fun bounty "One Word for the Boss"](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735): one word describing the boss, judged pairwise by an AI judge on funny, true, and fresh.

## The entry

> Bottleneck

The word people actually use about their boss — "he's the bottleneck." It is
funny as a plumbing insult, it rings true because every approval queues behind
one person, and it travels to any workplace where a queue forms. Twenty
candidates were scored against the judge's criteria in order in NOTES.md;
the single-word agent jokes (Undo, Ping, ASAP, Typo) are funnier in isolation
but fail the judge's first criterion — they describe what the boss does, not
what the boss is. Bottleneck describes both.

## Run

```sh
node main.ts
```

`main.ts` (Node 22) writes the word to `entry.txt` in the output directory
given by `MAKEFUN_OUTPUT_DIR` (default `/output`), byte for byte, with no
trailing newline, and asserts the read-back matches. It is deterministic: the
same bytes on every run.

## License

MIT — see [LICENSE](LICENSE).

# MyMasareef

**An AI-powered spending analysis tool for Egyptian bank users. Upload a bank statement, get a full categorized spending report in seconds. Your financial data never leaves your browser.**

## The Story

I opened my CIB bank statement one day and couldn't figure out where my money was going. The CSV was full of entries like `KASHIER*ZOOBA 5TH SETTELMENT CAIRO N.` and `GEIDEA*TALABAT-07A EGY`. Payment processors in Egypt mask the actual merchant name behind cryptic codes, location suffixes, and terminal IDs.

I looked for a tool that could make sense of this. Nothing existed. Neobanks like Telda only categorize their own card's transactions. International budgeting apps don't connect to Egyptian banks and have no idea what Egyptian merchants look like. The gap was obvious, and nobody was filling it.

So I built MyMasareef (Arabic for "my expenses"). You upload your CIB CSV, and AI handles the rest.

## How the AI Works

The core challenge was teaching a system to understand Egyptian merchant data. A restaurant called Zooba might appear as `KASHIER*ZOOBA`, `GEIDEA*ZOOBA 5TH SETTELMENT`, or `PAYMOB*ZOOBA-12E EGY` depending on which payment processor the restaurant uses and which branch you visited.

I built a three-layer classification system:

1. **Pattern matching** against 90+ known Egyptian merchants, with a normalization layer that strips processor prefixes, location suffixes, and terminal codes
2. **Gemini Flash** for anything unrecognized, prompted with Egyptian market context (most cryptic single-word names are restaurants, here are common processor patterns, etc.)
3. **Manual user override** as a last resort

The key insight: every classification, whether from the AI or from a user, gets saved to a shared merchant dictionary. So the system gets smarter with every upload. Over time, the AI gets called less and less because the dictionary already knows the answer.

## Privacy by Design

Egyptian users are cautious about sharing financial data online, and rightfully so. I made a deliberate architectural decision: all financial processing happens in the browser. Transaction amounts, dates, and balances never touch my server. The only thing sent to the AI is the merchant name string, nothing else.

This isn't just a technical choice. It's the product's trust proposition. When your landing page can honestly say "your money data never leaves your device," that changes how people feel about trying the tool.

## What the Report Looks Like

Once the AI categorizes your transactions, you get:

- A spending summary with totals, daily averages, and a plain-English narrative
- Visual breakdowns by category (Dining, Groceries, Subscriptions, Transport, etc.) with month-over-month comparisons
- Expandable transaction lists so you can see exactly what's in each category
- Automated insights: which categories dominate your spending, recurring subscriptions you might have forgotten about, large purchases, spending shifts compared to last month
- For debit cards: a full cash flow view showing income vs. spending vs. transfers, plus a savings rate

## A Few Product Decisions I'm Proud Of

**The email gate comes after the report, not before.** Users watch their transactions being categorized in real time, see the progress bar, see categories appearing. By the time I ask for their email to unlock the full report, they're already invested. This is a deliberate conversion pattern: show value first, then ask for identity.

**The merchant dictionary is crowdsourced.** Instead of scaling my AI budget, I designed the system so that each classification trains the next one. The cost per report goes down over time while accuracy goes up. It's a small data flywheel, but it works.

**Debit cards got their own experience.** CIB debit CSVs have salary deposits, P2P transfers, ATM withdrawals. Instead of forcing this into the credit card model, I built a separate flow that understands money movement: income in, spending out, transfers between accounts, and what you actually saved.

## How I Built It

I used Claude Code as my primary development tool, with Replit and Magic Patterns for design exploration and UI prototyping. Lovable helped with early scaffolding before moving to a local dev setup deployed on Railway.

The stack: React, TypeScript, Tailwind, Supabase, Express, Google Gemini 2.5 Flash, Recharts, Framer Motion, Playwright.

Idea to deployed product: 4 days.

## Try It

**mymasareef.com**

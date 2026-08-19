# LifeWorld OS / notionOS Game UI

A public UI sandbox for exploring NotionOS as an open-world life game.

## Current phase

This repository is intentionally **sample-data only**.

- No Notion API connection
- No personal data
- No health, legal, financial, or family data
- No secrets or tokens
- Current NotionOS capabilities and experimental UI hypotheses must be visually distinguished

## Goal

The UI should help a player feel, without reading a manual:

1. Where am I now?
2. What can I do next?
3. What abilities or systems are available?
4. What resources constrain action?
5. What mechanism feels missing?

The goal is not to build a game-looking Notion dashboard. The game metaphor is used only when it makes the system easier to understand through interaction.

## Prototype screens

- **WORLD** — world state and system map
- **QUESTS** — theme → project → action flow
- **CHARACTER** — player state and resources
- **SYSTEM LAB** — enable/disable current systems and compare experimental candidates

## Tech

Plain HTML, CSS, and JavaScript. No build step is required.

Open `index.html` locally, or publish the `main` branch with GitHub Pages.

## Development

`main` should remain usable. Prefer small, meaningful commits. Experimental concepts must be marked as `Experimental`, `Hypothesis`, or `Candidate` until they are validated.

See [`AGENTS.md`](./AGENTS.md) for Codex instructions.
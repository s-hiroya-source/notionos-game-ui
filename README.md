# LifeWorld OS / notionOS Game UI

A public UI sandbox for exploring NotionOS as an open-world life game.

## Current phase

This repository is intentionally **sample-data only**.

- No Notion API connection
- No personal data
- No health, legal, financial, or family data
- No secrets or tokens
- Current NotionOS capabilities are translated into game UI using structurally faithful labels and public-safe examples
- Missing/future capabilities are **not** shown as current features

## Goal

The UI should help a player feel, without reading a manual:

1. Where am I now?
2. What quests and actions already exist?
3. What abilities, tools, memory systems, and world sensors are available?
4. How does NotionOS preserve experience and improve itself?
5. When a necessary game function is absent from the screen, is that absence evidence of a real system gap?

The goal is not to build a game-looking Notion dashboard. The game metaphor is used when it makes NotionOS easier to understand through interaction.

## Current screens

- **WORLD** — open-world exploration view of current NotionOS regions and systems
- **QUESTS** — Subject → Project → Task → Result as quest structure
- **CHARACTER** — self model, AI loadout, tools, and the seven-resource model
- **JOURNAL** — source logs, dialogue, evidence, reflection, knowledge, and save flow
- **SYSTEM LAB** — current NotionOS quality / patch loop

## Tech

Plain HTML, CSS, JavaScript, and an original SVG world scene. No build step is required.

Open `index.html` locally, or use the GitHub Pages site from the `main` branch.

## Development

`main` should remain usable. Prefer small, meaningful commits. Do not add personal data to the public sandbox.

See [`AGENTS.md`](./AGENTS.md) for Codex instructions.

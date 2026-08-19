# AGENTS.md

## Project

This repository contains **LifeWorld OS / notionOS Game UI**, a public sample-data sandbox for exploring NotionOS as an open-world life game.

## Source of truth

- The current implementation in this GitHub repository is the source of truth for the website.
- Do not reconstruct the current UI from old chat history.
- When a requested UI change depends on the current NotionOS structure, treat Notion as read-only reference unless the user explicitly asks to change Notion.

## Product goal

Build an interface where playing with the UI makes the role of NotionOS understandable through interaction.

Prioritize:
1. Touching the UI should reveal meaning.
2. Structure should be felt without reading long explanations.
3. Real-life judgment, exploration, and action should map naturally to the interaction.
4. Systems can be toggled, compared, or experimented with.
5. Missing capabilities should be felt as friction.
6. Game aesthetics are a means, not the goal.

Avoid turning the product into a conventional Notion dashboard with game decoration.

## Initial metaphor

These mappings are hypotheses, not immutable rules:

- Life = Open World
- User = Player
- Current state = Player / World State
- Future hypothesis = Destination / World to create
- Theme = Quest Line / Region
- Project = Quest
- Task / experiment = Action
- Resource = HP / MP / Time / Money / Attention / Inventory
- Facts / source records = Save Log / World Evidence
- Reflection = Replay / Journal
- Self-model = Character Model
- AI Module / Skill = Ability / Skill / Party Member
- Radar = Sensor / World Scan
- Interface = HUD / Menu / Hub
- Execution feedback = Play Log
- Quality loop = Game Balance / Patch Loop
- Design principles = World Rules / Constitution

## Current vs experimental

Visually distinguish real/current system concepts from future candidates.

Experimental features must be labeled with one of:
- Experimental
- Hypothesis
- Candidate

Do not present experimental candidates as current NotionOS capabilities.

## Privacy and data

This phase is sample-data only.

Never add:
- Notion API tokens
- personal data
- health data
- legal data
- financial data
- family data
- credentials or secrets

Do not connect the Notion API in this phase.

## Technical constraints

- Keep the prototype lightweight.
- Prefer plain HTML/CSS/JS unless a framework materially improves the experience.
- Keep `main` functional.
- Make the smallest change that accomplishes the requested UI behavior.
- Check desktop and mobile behavior after meaningful UI changes.

## Git conventions

Use short English commit messages that describe intent, for example:

- `feat: add resource forecast HUD`
- `tune: simplify world map interaction`
- `remove: drop XP system experiment`
- `fix: improve mobile quest layout`

## First task for Codex

Before changing code, inspect the repository and report:
1. current file structure
2. current screen structure
3. main interaction model
4. likely technical risks
5. where future UI experiments can be added cleanly

Do not modify code during that first inspection task.
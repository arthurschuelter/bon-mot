# Minigames

The homepage catalog lives in `src/data/games.ts`. Entries follow the exported `Game` interface. Each item has a `slug`, which maps to `/games/:gameSlug` and is rendered by the shared `GamePlaceholder` page until a game is implemented.

Suggested structure when building a game:

```
src/pages/games/
  GamePlaceholder.tsx
  passe-compose/
    PasseComposeGame.tsx
    index.ts
  imparfait/
    ImparfaitGame.tsx
    index.ts
```

Keep reusable game UI in `src/components/` and shared game data or question sets in `src/data/`.

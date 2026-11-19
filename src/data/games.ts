// Add or edit game entries here. Use an ISO 8601 timestamp for createdAt.
// Game pages can live in src/pages/games/.
export type GameCategory = 'Past tenses' | 'Verb forms' | 'Grammar';
export type GameIcon = 'clock' | 'book' | 'spark' | 'grid' | 'check';
export type GameTone = 'tone-peach' | 'tone-lilac' | 'tone-mint' | 'tone-blue' | 'tone-yellow' | 'tone-rose';

export interface Game {
  createdAt: string;
  slug: string;
  title: string;
  category: GameCategory;
  description: string;
  level: string;
  icon: GameIcon;
  tone: GameTone;
}

export const games: Game[] = [
  { createdAt: '2026-11-02T10:35:40-03:00', slug: 'passe-compose', title: 'The passé composé', category: 'Past tenses', description: 'Piece together yesterday with avoir, être, and a past participle.', level: 'A2 · 5 MIN', icon: 'clock', tone: 'tone-peach' },
  { createdAt: '2026-11-02T10:35:40-03:00', slug: 'imparfait', title: 'Imparfait or not?', category: 'Past tenses', description: 'Set the scene and talk about the way things used to be.', level: 'A2 · 4 MIN', icon: 'book', tone: 'tone-lilac' },
  { createdAt: '2026-11-02T10:35:40-03:00', slug: 'past-tense-mix', title: 'A tale of two tenses', category: 'Past tenses', description: 'Choose the right past tense to bring a little story to life.', level: 'B1 · 6 MIN', icon: 'spark', tone: 'tone-mint' },
  { createdAt: '2026-11-02T10:35:40-03:00', slug: 'present-tense', title: 'Present tense, present moment', category: 'Verb forms', description: 'Give everyday verbs their proper endings, one turn at a time.', level: 'A1 · 3 MIN', icon: 'grid', tone: 'tone-blue' },
  { createdAt: '2026-11-02T10:35:40-03:00', slug: 'agreement', title: 'Make it agree', category: 'Grammar', description: 'Bring nouns and adjectives into harmony.', level: 'A2 · 4 MIN', icon: 'check', tone: 'tone-yellow' },
  { createdAt: '2026-11-02T10:35:40-03:00', slug: 'pronouns', title: 'Pronoun swap', category: 'Grammar', description: 'Trade names for the right little words and keep the flow.', level: 'B1 · 5 MIN', icon: 'spark', tone: 'tone-rose' }
];

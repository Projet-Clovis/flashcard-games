# Structure recommandée

todo: enlever le dossier games et mettre directement dans src (après tout, le repo s'appelle déjà flashcard-games)

```text
src/
├── games/                        # Un dossier par mini‑jeu
│   ├── flashcard/                # Mini‑jeu “Flashcard”
│   │   ├── components/           # UI components spécifiques
│   │   │   ├── Flashcard.tsx
│   │   │   ├── TimerBar.tsx
│   │   │   └── GameOver.tsx
│   │   ├── core/                 # Logique “headless”
│   │   │   └── FlashcardGameEngine.ts
│   │   ├── hooks/                # Hooks spécifiques au jeu
│   │   │   └── useFlashcardGame.ts
│   │   ├── types/                # Types spécifiques au jeu
│   │   │   └── flashcardTypes.ts
│   │   └── index.ts              # Export du mini‑jeu
│   │
│   ├── quiz/                     # Mini‑jeu “Quiz”
│   │   ├── components/
│   │   ├── core/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── index.ts
│   │
│   ├── spelling/                 # Mini‑jeu “Spelling”
│   │   ├── components/
│   │   ├── core/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── index.ts
│   │
│   └── index.ts                  # Réexporte tous les jeux
│
├── shared/                       # Code partagé à tous les jeux
│   ├── utils/                    # Fonctions utilitaires génériques
│   │   └── scoreUtils.ts
│   ├── hooks/                    # Hooks réutilisables (e.g. useCountdown)
│   │   └── useCountdown.ts
│   └── types/                    # Types globaux (ISO dates, etc.)
│       └── index.ts
│
├── components/                   # UI “shell” commun, layout, navigation
│   └── Navbar.tsx
│
├── hooks/                        # Hooks “shell” (ex. useTheme)
│   └── useTheme.ts
│
├── types/                        # Types applicatifs globaux
│   └── appTypes.ts
│
├── utils/                        # Utils très génériques (formatDate, logger…)
│   └── formatDate.ts
│
├── App.tsx                       # Point d’entrée de l’app de démo
├── main.tsx
└── index.html
```

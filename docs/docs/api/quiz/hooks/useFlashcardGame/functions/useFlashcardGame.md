[**Documentation**](../../../../README.md)

***

[Documentation](../../../../README.md) / [quiz/hooks/useFlashcardGame](../README.md) / useFlashcardGame

# Function: useFlashcardGame()

> **useFlashcardGame**(`questions`): `object`

Defined in: [quiz/hooks/useFlashcardGame.ts:35](https://github.com/Projet-Clovis/flashcard-games/blob/8c85f3457b48eef736423c9679a7c1b51f15688e/src/quiz/hooks/useFlashcardGame.ts#L35)

Custom hook to manage a flashcard-style quiz game.

## Parameters

### questions

[`Question`](../../../../shared/types/flashcardTypes/type-aliases/Question.md)[]

An array of questions for the game session.
Each question should include at least a `correctAnswer` field.

## Returns

`object`

An object containing:
- `currentQuestion`: The current question object.
- `currentQuestionIndex`: The index of the current question.
- `timeLeft`: The remaining time to answer the current question.
- `score`: The current score of the player.
- `isGameOver`: Whether the game has ended.
- `selectedAnswer`: The answer currently selected by the player.
- `isAnswerCorrect`: Whether the selected answer was correct.
- `handleAnswerSelection`: A function to call when selecting an answer.
- `resetGame`: A function to reset the game to its initial state.

### currentQuestion

> **currentQuestion**: [`Question`](../../../../shared/types/flashcardTypes/type-aliases/Question.md)

### currentQuestionIndex

> **currentQuestionIndex**: `number`

### handleAnswerSelection()

> **handleAnswerSelection**: (`answer`) => `void`

#### Parameters

##### answer

`null` | `string`

#### Returns

`void`

### isAnswerCorrect

> **isAnswerCorrect**: `boolean`

### isGameOver

> **isGameOver**: `boolean`

### resetGame()

> **resetGame**: () => `void`

#### Returns

`void`

### score

> **score**: `number`

### selectedAnswer

> **selectedAnswer**: `null` \| `string`

### timeLeft

> **timeLeft**: `number`

## Example

```tsx
const {
  currentQuestion,
  handleAnswerSelection,
  timeLeft,
  score,
  resetGame,
} = useFlashcardGame(myQuestionsArray);
```

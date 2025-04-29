[**Documentation**](../../../../README.md)

***

[Documentation](../../../../README.md) / [quiz/archive/useQuiz](../README.md) / useFlashcardGame

# Function: useFlashcardGame()

> **useFlashcardGame**(`questions`): `object`

Defined in: [quiz/archive/useQuiz.ts:5](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/useQuiz.ts#L5)

## Parameters

### questions

[`Question`](../../../../shared/types/flashcardTypes/type-aliases/Question.md)[]

## Returns

`object`

### answer()

> **answer**: (`answer`) => `void` = `handleAnswer`

#### Parameters

##### answer

`null` | `string`

#### Returns

`void`

### isAnswerCorrect

> **isAnswerCorrect**: `null` \| `boolean` = `gameRef.current.isAnswerCorrect`

### isGameOver

> **isGameOver**: `boolean` = `gameRef.current.isGameOver`

### question

> **question**: [`Question`](../../../../shared/types/flashcardTypes/type-aliases/Question.md) = `gameRef.current.currentQuestion`

### reset()

> **reset**: () => `void`

#### Returns

`void`

### score

> **score**: `number` = `gameRef.current.currentScore`

### selectedAnswer

> **selectedAnswer**: `null` \| `string` = `gameRef.current.selectedAnswer`

### timeLeft

> **timeLeft**: `number` = `gameRef.current.timeLeft`

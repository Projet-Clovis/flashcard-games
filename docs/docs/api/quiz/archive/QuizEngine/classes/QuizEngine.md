[**Documentation**](../../../../README.md)

***

[Documentation](../../../../README.md) / [quiz/archive/QuizEngine](../README.md) / QuizEngine

# Class: QuizEngine

Defined in: [quiz/archive/QuizEngine.ts:3](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L3)

## Constructors

### Constructor

> **new QuizEngine**(`questions`, `timeLimit`): `QuizEngine`

Defined in: [quiz/archive/QuizEngine.ts:15](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L15)

#### Parameters

##### questions

[`Question`](../../../../shared/types/flashcardTypes/type-aliases/Question.md)[]

##### timeLimit

`number` = `5`

#### Returns

`QuizEngine`

## Properties

### isAnswerCorrect

> **isAnswerCorrect**: `null` \| `boolean` = `null`

Defined in: [quiz/archive/QuizEngine.ts:12](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L12)

***

### isGameOver

> **isGameOver**: `boolean` = `false`

Defined in: [quiz/archive/QuizEngine.ts:13](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L13)

***

### selectedAnswer

> **selectedAnswer**: `null` \| `string` = `null`

Defined in: [quiz/archive/QuizEngine.ts:11](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L11)

## Accessors

### currentQuestion

#### Get Signature

> **get** **currentQuestion**(): [`Question`](../../../../shared/types/flashcardTypes/type-aliases/Question.md)

Defined in: [quiz/archive/QuizEngine.ts:21](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L21)

##### Returns

[`Question`](../../../../shared/types/flashcardTypes/type-aliases/Question.md)

***

### currentScore

#### Get Signature

> **get** **currentScore**(): `number`

Defined in: [quiz/archive/QuizEngine.ts:29](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L29)

##### Returns

`number`

***

### timeLeft

#### Get Signature

> **get** **timeLeft**(): `number`

Defined in: [quiz/archive/QuizEngine.ts:25](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L25)

##### Returns

`number`

## Methods

### answer()

> **answer**(`answer`): `void`

Defined in: [quiz/archive/QuizEngine.ts:51](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L51)

#### Parameters

##### answer

`null` | `string`

#### Returns

`void`

***

### resetGame()

> **resetGame**(): `void`

Defined in: [quiz/archive/QuizEngine.ts:83](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L83)

#### Returns

`void`

***

### resetTurn()

> **resetTurn**(): `void`

Defined in: [quiz/archive/QuizEngine.ts:77](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L77)

#### Returns

`void`

***

### startCountdown()

> **startCountdown**(`onTick`, `onTimeout`): `void`

Defined in: [quiz/archive/QuizEngine.ts:33](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L33)

#### Parameters

##### onTick

(`time`) => `void`

##### onTimeout

() => `void`

#### Returns

`void`

***

### stopCountdown()

> **stopCountdown**(): `void`

Defined in: [quiz/archive/QuizEngine.ts:46](https://github.com/Projet-Clovis/flashcard-games/blob/cdaa1ee741a03ae1c8c76b5e87cd54da494e38ee/src/quiz/archive/QuizEngine.ts#L46)

#### Returns

`void`

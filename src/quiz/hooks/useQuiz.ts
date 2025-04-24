import { useEffect, useRef } from 'react';
import { QuizEngine } from '../core/QuizEngine.ts';
import { Question } from '../../shared/types/flashcardTypes.ts';

export function useFlashcardGame(questions: Question[]) {
    const gameRef = useRef(new QuizEngine(questions));

    useEffect(() => {
        gameRef.current.startCountdown(
            () => {  },
            () => { handleAnswer(null); }
        );
    }); // todo: deps missing?

    const handleAnswer = (answer: string | null) => {
        gameRef.current.answer(answer);
    };

    const reset = () => {
        gameRef.current.resetGame();
        gameRef.current.startCountdown(
            () => {  },
            () => { handleAnswer(null); }
        );
    };

    return {
        question: gameRef.current.currentQuestion,
        score: gameRef.current.score,
        timeLeft: gameRef.current.timeLeft,
        isGameOver: gameRef.current.isGameOver,
        selectedAnswer: gameRef.current.selectedAnswer,
        isAnswerCorrect: gameRef.current.isAnswerCorrect,
        answer: handleAnswer,
        reset: reset,
    };
}

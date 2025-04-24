import { useEffect, useRef, useState } from 'react';
import { QuizEngine } from '../core/QuizEngine.ts';
import { Question } from '../../shared/types/flashcardTypes.ts';

export function useFlashcardGame(questions: Question[]) {
    const gameRef = useRef(new QuizEngine(questions));
    const [, setTick] = useState(0);

    useEffect(() => {
        gameRef.current.startCountdown(
            () => { setTick(t => t + 1); },
            () => { handleAnswer(null); }
        );
        return () => { gameRef.current.stopCountdown(); };
    }); // todo: deps missing?

    const handleAnswer = (answer: string | null) => {
        gameRef.current.answer(answer);
        setTick(t => t + 1); // force update
    };

    const reset = () => {
        gameRef.current.reset();
        setTick(t => t + 1);
        gameRef.current.startCountdown(
            () => { setTick(t => t + 1); },
            () => { handleAnswer(null); }
        );
    };

    return {
        question: gameRef.current.currentQuestion,
        score: gameRef.current.currentScore,
        timeLeft: gameRef.current.timeLeft,
        isGameOver: gameRef.current.isGameOver,
        selectedAnswer: gameRef.current.selectedAnswer,
        isAnswerCorrect: gameRef.current.isAnswerCorrect,
        answer: handleAnswer,
        reset:reset,
    };
}

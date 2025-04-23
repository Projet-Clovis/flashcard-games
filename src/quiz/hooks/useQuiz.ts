import { useEffect, useRef, useState } from 'react';
import { FlashcardGameEngine } from '../core/QuizEngine.ts';
import { Question } from '../../shared/types/flashcardTypes.ts';

export function useFlashcardGame(questions: Question[]) {
    const gameRef = useRef(new FlashcardGameEngine(questions));
    const [tick, setTick] = useState(0);

    useEffect(() => {
        gameRef.current.startCountdown(
            () => { setTick(t => t + 1); },
            () => { handleAnswer(null); }
        );
        return () => { gameRef.current.stopCountdown(); };
    }, []);

    const handleAnswer = (answer: string | null) => {
        gameRef.current.answer(answer);
        setTick(t => t + 1); // force update
    };

    return {
        question: gameRef.current.currentQuestion,
        score: gameRef.current.currentScore,
        timeLeft: gameRef.current.timeLeft,
        isGameOver: gameRef.current.isGameOver,
        selectedAnswer: gameRef.current.selectedAnswer,
        isAnswerCorrect: gameRef.current.isAnswerCorrect,
        answer: handleAnswer,
        reset: () => {
            gameRef.current.reset();
            setTick(t => t + 1);
            gameRef.current.startCountdown(
                () => { setTick(t => t + 1); },
                () => { handleAnswer(null); }
            );
        }
    };
}

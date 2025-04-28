import { useCallback, useEffect, useState } from "react";
import type { Question } from "../../shared/types/flashcardTypes.ts";
import { calculateScore } from "../../shared/utils/scoreUtils.ts";

export const maxTime = 3;
export const useFlashcardGame = (questions: Question[]) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState(maxTime);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerSelection = useCallback(
        (answer: string | null) => {
            if (answer !== null) {
                setSelectedAnswer(answer);
                setIsAnswerCorrect(answer === currentQuestion.correctAnswer);

                if (answer === currentQuestion.correctAnswer) {
                    const points = calculateScore(timeLeft);
                    setScore((prevScore) => prevScore + points);
                }
            } else {
                setSelectedAnswer(null);
                setIsAnswerCorrect(false);
            }

            setTimeout(() => {
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setTimeLeft(maxTime);
                    setSelectedAnswer(null);
                    setIsAnswerCorrect(false);
                } else {
                    setIsGameOver(true);
                }
            }, 1000);
        },
        [
            currentQuestion.correctAnswer,
            currentQuestionIndex,
            timeLeft,
            questions.length,
        ],
    );

    useEffect(() => {
        if (isGameOver) return;
        if (timeLeft <= 0) {
            handleAnswerSelection(null);
        } else {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => {
                clearInterval(timer);
            };
        }
    }, [timeLeft, isGameOver, handleAnswerSelection]);

    const resetGame = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimeLeft(maxTime);
        setIsGameOver(false);
        setSelectedAnswer(null);
        setIsAnswerCorrect(false);
    };

    return {
        currentQuestion,
        currentQuestionIndex,
        timeLeft,
        score,
        isGameOver,
        selectedAnswer,
        isAnswerCorrect,
        handleAnswerSelection,
        resetGame,
    };
};

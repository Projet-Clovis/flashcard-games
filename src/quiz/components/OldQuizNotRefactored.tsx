import { useState, useEffect, useCallback } from "react";
import { calculateScore } from "../../shared/utils/scoreUtils.ts";
import { TimerBar } from "../../shared/components/TimerBar.tsx";
import { Flashcard } from "./Flashcard.tsx";
import { questions } from "../../shared/data/flashcards-content.ts";

export const FlashcardGame = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(
        null,
    );
    const [timeLeft, setTimeLeft] = useState(10);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const handleAnswerSelection = useCallback(
        (answer: string | null) => {
            if (answer) {
                setSelectedAnswer(answer);
                setIsAnswerCorrect(answer === currentQuestion.correctAnswer);
                const points = calculateScore(timeLeft); // Calcul du score
                setScore((prevScore) => prevScore + points);
            } else {
                setSelectedAnswer(null);
                setIsAnswerCorrect(null);
            }

            setTimeout(() => {
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setTimeLeft(10); // Réinitialiser le timer pour la question suivante
                    setSelectedAnswer(null); // Réinitialiser la réponse sélectionnée
                    setIsAnswerCorrect(null); // Réinitialiser la correction
                } else {
                    setIsGameOver(true);
                }
            }, 1000);
        },
        [currentQuestion.correctAnswer, currentQuestionIndex, timeLeft], // Dépendances de useCallback
    );

    useEffect(() => {
        if (isGameOver) return;
        if (timeLeft === 0) {
            handleAnswerSelection(null); // Soumettre la réponse si le temps est écoulé
        } else {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => {
                clearInterval(timer);
            };
        }
    }, [timeLeft, isGameOver, handleAnswerSelection]);

    return (
        <div className="flex flex-col items-center justify-center p-6 max-w-md mx-auto">
            {!isGameOver ? (
                <div className="w-full">
                    <TimerBar timeLeft={timeLeft} />
                    <Flashcard
                        question={currentQuestion.question}
                        options={currentQuestion.options}
                        selectedAnswer={selectedAnswer}
                        isAnswerCorrect={isAnswerCorrect}
                        onAnswerSelect={handleAnswerSelection}
                    />
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold mb-4">Jeu terminé !</div>
                    <div className="text-lg mb-4">
                        Votre score final est : {score} points
                    </div>
                    <button
                        onClick={() => {
                            setCurrentQuestionIndex(0);
                            setScore(0);
                            setTimeLeft(10);
                            setIsGameOver(false);
                        }}
                        className="bg-blue-500 text-white p-3 rounded-lg"
                    >
                        Rejouer
                    </button>
                </div>
            )}
        </div>
    );
};

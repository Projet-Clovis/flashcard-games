import React, { useState, useEffect } from 'react';

type FlashcardProps = {
    question: string;
    options: string[];
    correctAnswer: string;
};

type Question = FlashcardProps & {
    id: number;
};

const questions: Question[] = [
    { id: 1, question: "Quelle est la capitale de l'Espagne ?", options: ['Madrid', 'Barcelone', 'Séville', 'Valence'], correctAnswer: 'Madrid' },
    { id: 2, question: "Quel est le plus grand océan ?", options: ['Atlantique', 'Indien', 'Arctique', 'Pacifique'], correctAnswer: 'Pacifique' },
    { id: 3, question: "Qui a écrit 'Les Misérables' ?", options: ['Victor Hugo', 'Emile Zola', 'Gustave Flaubert', 'Marcel Proust'], correctAnswer: 'Victor Hugo' },
    { id: 4, question: "Quelle est la monnaie du Japon ?", options: ['Yen', 'Won', 'Rupee', 'Baht'], correctAnswer: 'Yen' },
    { id: 5, question: "Quel est l'élément chimique avec le symbole 'O' ?", options: ['Oxygène', 'Or', 'Ozone', 'Osmium'], correctAnswer: 'Oxygène' },
];

export const FlashcardGame = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [timeLeft, setTimeLeft] = useState(10);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    // Timer countdown
    useEffect(() => {
        if (isGameOver) return;
        if (timeLeft === 0) {
            handleAnswerSelection(null); // Automatically submit the answer if time runs out
        } else {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [timeLeft, isGameOver]);

    // Handle answer selection
    const handleAnswerSelection = (answer: string | null) => {
        if (answer) {
            setSelectedAnswer(answer);
            setIsAnswerCorrect(answer === currentQuestion.correctAnswer);

            // Calculate score (higher score for quicker response)
            const timeTaken = 10 - timeLeft; // Time taken to answer (in seconds)
            const points = Math.max(50 - timeTaken * 5, 0); // Max score is 50, deduct points based on time
            setScore((prevScore) => prevScore + points);
        } else {
            setSelectedAnswer(null);
            setIsAnswerCorrect(null);
        }

        // Go to the next question or end the game
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setTimeLeft(10); // Reset the timer for the next question
                setSelectedAnswer(null); // Reset the selected answer
                setIsAnswerCorrect(null); // Reset the correctness of the answer
            } else {
                setIsGameOver(true);
            }
        }, 1000);
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 max-w-md mx-auto">
            {!isGameOver ? (
                <div className="w-full">
                    <div className="text-2xl font-bold mb-4">{currentQuestion.question}</div>

                    {/* Progress Bar */}
                    <div className="w-full mb-4">
                        <div className="h-2 bg-gray-200 rounded-full">
                            <div
                                className="h-2 bg-blue-500 rounded-full transition-all duration-1000 ease-in-out"
                                style={{ width: `${(timeLeft / 10) * 100}%` }}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        {currentQuestion.options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleAnswerSelection(option)}
                                disabled={!!selectedAnswer} // Disable buttons after an answer is selected
                                className={`w-full p-3 rounded-lg border border-gray-300 ${
                                    selectedAnswer === option
                                        ? isAnswerCorrect
                                            ? 'bg-green-500 text-white'
                                            : 'bg-red-500 text-white'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {selectedAnswer && (
                        <div className="mt-4 text-lg">
                            {isAnswerCorrect ? '✅ Bonne réponse !' : '❌ Mauvaise réponse.'}
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold mb-4">Jeu terminé !</div>
                    <div className="text-lg mb-4">Votre score final est : {score} points</div>
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

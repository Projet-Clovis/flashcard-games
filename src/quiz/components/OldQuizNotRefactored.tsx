import { TimerBar } from "../../shared/components/TimerBar.tsx";
import { maxTime, useFlashcardGame } from "../hooks/useFlashcardGame.ts";
import { AnimatedFlashcard } from "./AnimatedFlashcard.tsx";

export const FlashcardGame = () => {
    const {
        currentQuestion,
        currentQuestionIndex,
        timeLeft,
        score,
        isGameOver,
        selectedAnswer,
        isAnswerCorrect,
        handleAnswerSelection,
        resetGame,
    } = useFlashcardGame();

    return (
        <div className="flex flex-col items-center justify-center p-6 max-w-md mx-auto">
            {!isGameOver ? (
                <div className="w-full">
                    <TimerBar timeLeft={timeLeft} timeLimit={maxTime} />
                    <AnimatedFlashcard
                        keyProp={String(currentQuestionIndex)}
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
                        type="button"
                        onClick={resetGame}
                        className="bg-blue-500 text-white p-3 rounded-lg"
                    >
                        Rejouer
                    </button>
                </div>
            )}
        </div>
    );
};

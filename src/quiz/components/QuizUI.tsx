import { useFlashcardGame } from "../hooks/useQuiz.ts";
import { TimerBar } from "../../shared/components/TimerBar.tsx";
import { Flashcard } from "./Flashcard.tsx";
import { questions } from "../../shared/data/flashcards-content.ts";

export const FlashcardGameUI = () => {
    const {
        question,
        score,
        timeLeft,
        isGameOver,
        selectedAnswer,
        isAnswerCorrect,
        answer,
        reset,
    } = useFlashcardGame(questions);

    return (
        <div className="p-6 max-w-md mx-auto">
            {!isGameOver ? (
                <>
                    <TimerBar timeLeft={timeLeft} />
                    <Flashcard
                        question={question.question}
                        options={question.options}
                        selectedAnswer={selectedAnswer}
                        isAnswerCorrect={isAnswerCorrect}
                        onAnswerSelect={answer}
                    />
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        🎉 Jeu terminé !
                    </h2>
                    <p className="text-lg mb-4">Score : {score} points</p>
                    <button className="btn" onClick={reset}>
                        Rejouer
                    </button>
                </div>
            )}
        </div>
    );
};

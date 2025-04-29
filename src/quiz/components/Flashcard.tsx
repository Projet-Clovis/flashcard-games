import { AnswerChoice } from "./AnswerChoice.tsx";

export interface FlashcardProps {
    question: string;
    options: string[];
    selectedAnswer: string | null;
    isAnswerCorrect: boolean | null;
    onAnswerSelect: (answer: string) => void;
} // todo: should be renamed

export const Flashcard = ({
    // todo: should be renamed
    question,
    options,
    selectedAnswer,
    isAnswerCorrect,
    onAnswerSelect,
}: FlashcardProps) => {
    return (
        <div className="w-full">
            <div className="text-2xl font-bold mb-4">{question}</div>
            <div className="space-y-4">
                {options.map((option) => (
                    <AnswerChoice
                        key={option}
                        option={option}
                        selectedAnswer={selectedAnswer}
                        isAnswerCorrect={isAnswerCorrect}
                        onAnswerSelect={onAnswerSelect}
                    />
                ))}
            </div>
            {selectedAnswer && (
                <div className="mt-4 text-lg">
                    {isAnswerCorrect
                        ? "✅ Bonne réponse !"
                        : "❌ Mauvaise réponse."}
                </div>
            )}
        </div>
    );
};

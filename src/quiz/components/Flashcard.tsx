import type React from "react";

export interface FlashcardProps {
    question: string;
    options: string[];
    selectedAnswer: string | null;
    isAnswerCorrect: boolean | null;
    onAnswerSelect: (answer: string) => void;
}

export const Flashcard: React.FC<FlashcardProps> = ({
    question,
    options,
    selectedAnswer,
    isAnswerCorrect,
    onAnswerSelect,
}) => {
    return (
        <div className="w-full">
            <div className="text-2xl font-bold mb-4">{question}</div>
            <div className="space-y-4">
                {options.map((option) => (
                    <button
                        type="button"
                        key={option}
                        onClick={() => {
                            onAnswerSelect(option);
                        }}
                        disabled={Boolean(selectedAnswer)} // Désactive après réponse
                        className={`w-full p-3 rounded-lg border border-gray-300 ${
                            selectedAnswer === option
                                ? isAnswerCorrect
                                    ? "bg-green-100 text-green-900 border-green-700"
                                    : "bg-red-100 text-red-900 border-red-700"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    >
                        {option}
                    </button>
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

import React, { useState } from 'react';

interface FlashcardProps {
    question: string;
    options: string[];
    correctAnswer: string;
}

export const QuickFlashcard: React.FC<FlashcardProps> = ({ question, options, correctAnswer }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [result, setResult] = useState<null | boolean>(null);

    const handleClick = (option: string) => {
        setSelected(option);
        setResult(option === correctAnswer);
    };

    return (
        <div className="border border-gray-300 p-4 rounded-lg max-w-md">
            <h3 className="text-lg font-semibold mb-4">{question}</h3>
            <div className="flex flex-col gap-2">
                {options.map((opt) => {
                    const isSelected = selected === opt;
                    const isCorrect = result === true;

                    const baseStyle = 'px-4 py-2 border rounded cursor-pointer transition-colors';
                    let selectedStyle: string;

                    if (isSelected) {
                        selectedStyle = isCorrect
                            ? 'bg-green-200 border-green-400 cursor-default'
                            : 'bg-red-200 border-red-400 cursor-default';
                    } else {
                        selectedStyle = 'bg-gray-100 border-gray-400 hover:bg-gray-200';
                    }

                    return (
                        <button
                            key={opt}
                            onClick={() => { handleClick(opt); }}
                            disabled={Boolean(selected)}
                            className={`${baseStyle} ${selectedStyle}`}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>
            {selected && (
                <p className="mt-4">
                    {result ? '✅ Bonne réponse !' : '❌ Mauvaise réponse.'}
                </p>
            )}
        </div>
    );
};

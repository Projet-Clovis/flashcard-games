import React, { useState } from 'react';

type FlashcardProps = {
    question: string;
    options: string[];
    correctAnswer: string;
};

export const QuickFlashcard: React.FC<FlashcardProps> = ({ question, options, correctAnswer }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [result, setResult] = useState<null | boolean>(null);

    const handleClick = (option: string) => {
        setSelected(option);
        setResult(option === correctAnswer);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, maxWidth: 400 }}>
            <h3>{question}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => handleClick(opt)}
                        disabled={!!selected}
                        style={{
                            padding: 8,
                            backgroundColor:
                                selected === opt
                                    ? result
                                        ? '#c8f7c5'
                                        : '#f7c5c5'
                                    : '#eee',
                            cursor: selected ? 'default' : 'pointer',
                            border: '1px solid #aaa',
                            borderRadius: 4,
                        }}
                    >
                        {opt}
                    </button>
                ))}
            </div>
            {selected && (
                <p style={{ marginTop: 12 }}>
                    {result ? '✅ Bonne réponse !' : '❌ Mauvaise réponse.'}
                </p>
            )}
        </div>
    );
};

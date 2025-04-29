export interface FlashcardProps {
    question: string;
    options: string[];
    correctAnswer: string;
}

export type Question = FlashcardProps & {
    id: number;
}; // todo: not sure about these types

import type { Question } from "../types/flashcardTypes.ts";

export const q_spain: Question = {
    id: 1,
    question: "Quelle est la capitale de l'Espagne ?",
    options: ["Madrid", "Barcelone", "Séville", "Valence"],
    correctAnswer: "Madrid",
};

export const q_ocean: Question = {
    id: 2,
    question: "Quel est le plus grand océan ?",
    options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
    correctAnswer: "Pacifique",
};

export const q_book: Question = {
    id: 3,
    question: "Qui a écrit 'Les Misérables' ?",
    options: ["Victor Hugo", "Emile Zola", "Gustave Flaubert", "Marcel Proust"],
    correctAnswer: "Victor Hugo",
};

export const q_yen: Question = {
    id: 4,
    question: "Quelle est la monnaie du Japon ?",
    options: ["Yen", "Won", "Rupee", "Baht"],
    correctAnswer: "Yen",
};

export const q_oxygen: Question = {
    id: 5,
    question: "Quel est l'élément chimique avec le symbole 'O' ?",
    options: ["Oxygène", "Or", "Ozone", "Osmium"],
    correctAnswer: "Oxygène",
};

export const questions: Question[] = [
    q_spain,
    q_ocean,
    q_book,
    q_yen,
    q_oxygen,
];

export const questionsTest: Question[] = [
    {
        id: 1,
        question: "q1",
        options: ["a1", "a2", "a3"],
        correctAnswer: "a1",
    },
    {
        id: 2,
        question: "q2",
        options: ["b1", "b2", "b3"],
        correctAnswer: "b2",
    },
    {
        id: 3,
        question: "q3",
        options: ["c1", "c2", "c3"],
        correctAnswer: "c3",
    },
];

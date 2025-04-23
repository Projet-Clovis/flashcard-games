import {Question} from "../src/types/flashcardTypes";

export const questions: Question[] = [
    { id: 1, question: "Quelle est la capitale de l'Espagne ?", options: ['Madrid', 'Barcelone', 'Séville', 'Valence'], correctAnswer: 'Madrid' },
    { id: 2, question: "Quel est le plus grand océan ?", options: ['Atlantique', 'Indien', 'Arctique', 'Pacifique'], correctAnswer: 'Pacifique' },
    { id: 3, question: "Qui a écrit 'Les Misérables' ?", options: ['Victor Hugo', 'Emile Zola', 'Gustave Flaubert', 'Marcel Proust'], correctAnswer: 'Victor Hugo' },
    { id: 4, question: "Quelle est la monnaie du Japon ?", options: ['Yen', 'Won', 'Rupee', 'Baht'], correctAnswer: 'Yen' },
    { id: 5, question: "Quel est l'élément chimique avec le symbole 'O' ?", options: ['Oxygène', 'Or', 'Ozone', 'Osmium'], correctAnswer: 'Oxygène' },
];

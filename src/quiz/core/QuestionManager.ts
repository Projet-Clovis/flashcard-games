import { Question } from '../../shared/types/flashcardTypes.ts';

export class QuestionManager {
    private readonly questions: Question[];
    private currentIndex = 0;

    constructor(questions: Question[]) {
        this.questions = questions;
    }

    get currentQuestion(): Question {
        return this.questions[this.currentIndex];
    }

    get nextQuestion(): Question | null {
        return this.currentIndex < this.questions.length - 1
            ? this.questions[this.currentIndex + 1]
            : null;
    }

    next() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
        }
    }

    reset() {
        this.currentIndex = 0;
    }

    isCorrect(givenAnswer: string, trueAnswer: string) {
        return givenAnswer === trueAnswer;
    }
}

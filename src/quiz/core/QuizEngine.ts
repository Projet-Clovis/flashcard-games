import { Question } from '../../shared/types/flashcardTypes.ts';

export class QuizEngine {
    private readonly questions: Question[];
    private currentIndex = 0;
    private readonly timeLimit: number;
    private score = 0;
    private _timeLeft: number;
    private _timer: NodeJS.Timeout | null = null;

    public selectedAnswer: string | null = null;
    public isAnswerCorrect: boolean | null = null;
    public isGameOver = false;

    constructor(questions: Question[], timeLimit = 10) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this._timeLeft = timeLimit;
    }

    get currentQuestion(): Question {
        return this.questions[this.currentIndex];
    }

    get timeLeft(): number {
        return this._timeLeft;
    }

    get currentScore(): number {
        return this.score;
    }

    startCountdown(onTick: (time: number) => void, onTimeout: () => void) {
        this.stopCountdown();
        this._timer = setInterval(() => {
            this._timeLeft -= 0.2;
            onTick(this._timeLeft);

            if (this._timeLeft <= 0) {
                this.stopCountdown();
                onTimeout();
            }
        }, 200);
    }

    stopCountdown() {
        if (this._timer) clearInterval(this._timer);
        this._timer = null;
    }

    answer(answer: string | null): void {
        this.stopCountdown();

        if (answer !== null) {
            this.selectedAnswer = answer;
            this.isAnswerCorrect = answer === this.currentQuestion.correctAnswer;
            if (this.isAnswerCorrect) {
                const points = Math.max(0, this._timeLeft * 5);
                this.score += points;
            }
        } else {
            this.selectedAnswer = null;
            this.isAnswerCorrect = null;
        }

        setTimeout(() => {
            if (this.currentIndex < this.questions.length - 1) {
                this.currentIndex++;
                this._timeLeft = this.timeLimit;
                this.selectedAnswer = null;
                this.isAnswerCorrect = null;
            } else {
                this.isGameOver = true;
            }
        }, 500);
    }

    reset() {
        this.currentIndex = 0;
        this.score = 0;
        this._timeLeft = this.timeLimit;
        this.selectedAnswer = null;
        this.isAnswerCorrect = null;
        this.isGameOver = false;
    }
}

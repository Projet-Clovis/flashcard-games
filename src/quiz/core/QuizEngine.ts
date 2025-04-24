import { QuestionManager } from './QuestionManager';
import { ScoreManager } from './ScoreManager';
import { GameState } from './GameState';
import { TimerService } from './TimerService';
import { Question } from '../../shared/types/flashcardTypes.ts';

export class QuizEngine {
    private questionManager: QuestionManager;
    private scoreManager: ScoreManager;
    private gameState: GameState;
    private timerService: TimerService;
    private readonly timeLimit:number;

    constructor(questions: Question[], timeLimit = 5) {
        this.questionManager = new QuestionManager(questions);
        this.scoreManager = new ScoreManager();
        this.gameState = new GameState();
        this.timerService = new TimerService(timeLimit);
        this.timeLimit = timeLimit;
    }

    get currentQuestion(): Question {
        return this.questionManager.currentQuestion;
    }

    get score(): number {
        return this.scoreManager.currentScore;
    }

    get timeLeft(): number {
        return this.timerService.timeLeft;
    }

    get isGameOver(): boolean {
        return this.gameState.gameOver;
    }

    get selectedAnswer(): string | null {
        return this.gameState.currentAnswer;
    }

    get isAnswerCorrect(): boolean | null {
        return this.gameState.answerCorrect;
    }

    startCountdown(onTick: (time: number) => void, onTimeout: () => void) {
        this.timerService.startCountdown(onTick, onTimeout);
    }

    stopCountdown() {
        this.timerService.stopCountdown();
    }

    resetTime() {
        this.timerService.resetTime(this.timeLimit);
    }

    answer(answer: string | null) {
        this.stopCountdown();

        if (answer) {
            const isCorrect = this.questionManager.isCorrect(
                answer,
                this.currentQuestion.correctAnswer
            );

            this.scoreManager.addPoints(isCorrect, this.timerService.timeLeft);
            this.gameState.setAnswer(answer, isCorrect);
        } else {
            this.gameState.setAnswer(null, null);
        }

        setTimeout(() => {
            if (this.questionManager.nextQuestion) {
                this.questionManager.next();
                this.resetTime();
            } else {
                this.gameState.endGame();
            }
        }, 500);
    }

    resetGame() {
        this.questionManager.reset();
        this.scoreManager.reset();
        this.gameState.reset();
        this.resetTime();
    }
}

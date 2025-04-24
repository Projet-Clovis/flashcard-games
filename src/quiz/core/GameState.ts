export class GameState {
    private isGameOver = false;
    private selectedAnswer: string | null = null;
    private isAnswerCorrect: boolean | null = null;

    get gameOver(): boolean {
        return this.isGameOver;
    }

    get currentAnswer(): string | null {
        return this.selectedAnswer;
    }

    get answerCorrect(): boolean | null {
        return this.isAnswerCorrect;
    }

    setAnswer(answer: string | null, isCorrect: boolean | null) {
        this.selectedAnswer = answer;
        this.isAnswerCorrect = isCorrect;
    }

    reset() {
        this.isGameOver = false;
        this.selectedAnswer = null;
        this.isAnswerCorrect = null;
    }

    endGame() {
        this.isGameOver = true;
    }
}

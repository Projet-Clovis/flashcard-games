export class ScoreManager {
    private score = 0;

    static calculatePoints(isCorrect: boolean, timeLeft: number) {
        return isCorrect ? Math.max(0, timeLeft * 5) : 0
    }

    get currentScore(): number {
        return this.score;
    }

    addPoints(isCorrect: boolean, timeLeft: number) {
        this.score += ScoreManager.calculatePoints(isCorrect, timeLeft);
    }

    reset() {
        this.score = 0;
    }
}

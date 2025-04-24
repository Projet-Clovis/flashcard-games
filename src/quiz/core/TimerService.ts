export class TimerService {
    private _timeLeft: number;
    private _timer: NodeJS.Timeout | null = null;

    constructor(initialTime: number) {
        this._timeLeft = initialTime;
    }

    // Démarre le timer
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

    // Arrête le timer
    stopCountdown() {
        if (this._timer) clearInterval(this._timer);
        this._timer = null;
    }

    // Redémarre le timer avec un nouveau temps
    resetTime(newTime: number) {
        this._timeLeft = newTime;
    }

    // Récupère le temps restant
    get timeLeft(): number {
        return this._timeLeft;
    }
}

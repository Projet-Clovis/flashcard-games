interface TimerBarProps {
    timeLeft: number;
    timeLimit: number;
}

function getColor(percentage: number): string {
    let barColor = "bg-green-600";

    if (percentage < 100) {
        barColor = "bg-green-600";
    }
    if (percentage < 75) {
        barColor = "bg-yellow-600";
    }
    if (percentage < 50) {
        barColor = "bg-orange-600";
    }
    if (percentage < 25) {
        barColor = "bg-red-600";
    }

    return barColor;
}

export const TimerBar = ({ timeLeft, timeLimit }: TimerBarProps) => {
    const percentage = (timeLeft / timeLimit) * 100;
    const barColor = getColor(percentage);

    return (
        <div className="w-full mb-4">
            <div className="h-2 bg-gray-200 rounded-full">
                <div
                    className={`${barColor} h-2 rounded-full transition-all duration-1000 ease-in-out`}
                    style={{
                        width: `${percentage}%`,
                    }}
                />
            </div>
            <p className="text-center mt-1">{timeLeft.toFixed(1)} s</p>
        </div>
    );
};

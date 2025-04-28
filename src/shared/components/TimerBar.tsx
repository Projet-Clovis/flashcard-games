interface TimerBarProps {
    timeLeft: number;
    timeLimit: number;
}

export const TimerBar = ({ timeLeft, timeLimit }: TimerBarProps) => {
    return (
        <div className="w-full mb-4">
            <div className="h-2 bg-gray-200 rounded-full">
                <div
                    className="h-2 bg-blue-500 rounded-full transition-all duration-1000 ease-in-out"
                    style={{
                        width: `${String((timeLeft / timeLimit) * 100)}%`,
                    }}
                />
            </div>
            <p className="text-center mt-1">{timeLeft.toFixed(1)} s</p>
        </div>
    );
};

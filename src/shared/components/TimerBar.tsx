import type React from "react";

interface TimerBarProps {
    timeLeft: number;
}

export const TimerBar: React.FC<TimerBarProps> = ({ timeLeft }) => {
    return (
        <div className="w-full mb-4">
            <div className="h-2 bg-gray-200 rounded-full">
                <div
                    className="h-2 bg-blue-500 rounded-full transition-all duration-1000 ease-in-out"
                    style={{ width: `${(timeLeft / 5) * 100}%` }}
                />
            </div>
            <p className="text-center mt-1">{timeLeft.toFixed(1)} s</p>
        </div>
    );
};

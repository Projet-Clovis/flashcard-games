/**
 * Properties for the TimerBar component.
 *
 * @interface TimerBarProps
 * @property timeLeft - Remaining time in seconds.
 * @property timeLimit - Total time limit in seconds.
 */
export interface TimerBarProps {
    timeLeft: number;
    timeLimit: number;
}

/**
 * Returns the color of the progress bar based on the remaining percentage.
 *
 * Color changes based on the following ranges:
 * - **Green**: 75% - 100%
 * - **Yellow**: 50% - 74%
 * - **Orange**: 25% - 49%
 * - **Red**: 0% - 25%
 *
 * @param percentage - The remaining percentage (from 0 to 100).
 * @returns The corresponding Tailwind CSS class for the color of the progress bar.
 */
function getColor(percentage: number): string {
    const colors = [
        "bg-green-600",
        "bg-yellow-600",
        "bg-orange-600",
        "bg-red-600",
    ];
    const thresholds = [100, 75, 50, 25];
    let barColor = colors[0];

    for (let i = 0; i < 4; i++) {
        if (percentage < thresholds[i]) {
            barColor = colors[i];
        }
    }

    return barColor;
}

/**
 * A progress bar that visually represents the remaining time.
 *
 * Bar color changes based on time left: green -> yellow -> orange -> red.
 *
 * @returns The TimerBar component displaying the progress and the remaining time.
 */
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

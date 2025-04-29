export interface AnswerChoiceProps {
    option: string;
    selectedAnswer: string | null;
    isAnswerCorrect: boolean | null;
    onAnswerSelect: (answer: string) => void;
} // todo: should be renamed

const correctAnswerStyle = "bg-green-100 text-green-900 border-green-700";
const wrongAnswerStyle = "bg-red-100 text-red-900 border-red-700";

export const AnswerChoice = ({
    option,
    selectedAnswer,
    isAnswerCorrect,
    onAnswerSelect,
}: AnswerChoiceProps) => {
    return (
        <button
            type="button"
            onClick={() => {
                onAnswerSelect(option);
            }}
            disabled={Boolean(selectedAnswer)} // Désactive après réponse
            className={`w-full p-3 rounded-lg border border-gray-300 ${
                selectedAnswer === option
                    ? isAnswerCorrect
                        ? correctAnswerStyle
                        : wrongAnswerStyle
                    : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
            {option}
        </button>
    );
};

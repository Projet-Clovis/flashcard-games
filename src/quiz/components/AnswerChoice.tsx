import { motion } from "framer-motion";

export interface AnswerChoiceProps {
    option: string;
    selectedAnswer: string | null;
    isAnswerCorrect: boolean | null;
    onAnswerSelect: (answer: string) => void;
} // TODO: should be renamed

const correctAnswerStyle = "bg-green-100 text-green-900 border-green-700";
const wrongAnswerStyle = "bg-red-100 text-red-900 border-red-700";

const shakeAnimation = {
    x: [0, -2, 2, -2, 2, 0],
    rotate: [0, -2, 2, -2, 2, 0],
    // backgroundColor: ["#fff", "#EB5757", "#fff"],
    transition: {
        duration: 0.5,
    },
};

export const AnswerChoice = ({
    option,
    selectedAnswer,
    isAnswerCorrect,
    onAnswerSelect,
}: AnswerChoiceProps) => {
    const isSelected = selectedAnswer === option;
    const isWrong = isSelected && isAnswerCorrect === false;

    const selectedClass = isSelected
        ? isAnswerCorrect
            ? correctAnswerStyle
            : wrongAnswerStyle
        : "bg-gray-100 hover:bg-gray-200";

    return (
        <motion.button
            type="button"
            onClick={() => onAnswerSelect(option)}
            disabled={Boolean(selectedAnswer)}
            className={`w-full p-3 rounded-lg border border-gray-300 ${selectedClass}`}
            animate={isWrong ? shakeAnimation : {}}
        >
            {option}
        </motion.button>
    );
};

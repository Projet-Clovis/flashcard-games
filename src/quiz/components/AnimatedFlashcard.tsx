import { AnimatePresence, motion } from "framer-motion";
import { Flashcard, type FlashcardProps } from "./Flashcard"; // Importer Flashcard ici

interface AnimatedFlashcardProps extends FlashcardProps {
    keyProp: string;
}

export const AnimatedFlashcard = ({
    keyProp,
    question,
    options,
    selectedAnswer,
    isAnswerCorrect,
    onAnswerSelect,
}: AnimatedFlashcardProps) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={keyProp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <Flashcard
                    question={question}
                    options={options}
                    selectedAnswer={selectedAnswer}
                    isAnswerCorrect={isAnswerCorrect}
                    onAnswerSelect={onAnswerSelect}
                />
            </motion.div>
        </AnimatePresence>
    );
};

import { AnimatePresence, motion } from "framer-motion";
import { Flashcard } from "./Flashcard"; // Importer Flashcard ici

interface AnimatedFlashcardProps {
    keyProp: string; // Clé unique pour l'élément animé
    question: string; // Question à afficher
    options: string[]; // Options à afficher
    selectedAnswer: string | null; // Réponse sélectionnée
    isAnswerCorrect: boolean | null; // Si la réponse est correcte
    onAnswerSelect: (answer: string | null) => void; // Fonction pour sélectionner la réponse
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
                key={keyProp} // Utilise une clé unique pour chaque animation
                initial={{ opacity: 0, y: 20 }} // Animation d'entrée
                animate={{ opacity: 1, y: 0 }} // Animation quand la carte est visible
                exit={{ opacity: 0, y: -20 }} // Animation de sortie
                transition={{ duration: 0.5 }} // Durée de la transition
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

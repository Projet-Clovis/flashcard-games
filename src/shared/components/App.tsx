import { Quiz } from "../../quiz/components/Quiz.tsx";
import { questions } from "../data/flashcards-content.ts";

function App() {
    return (
        <>
            <div className="p-10">
                <Quiz questions={questions} />
            </div>
        </>
    );
}

export default App;

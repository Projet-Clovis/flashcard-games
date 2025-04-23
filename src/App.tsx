import { useState } from 'react'
import {QuickFlashcard} from "./components/QuickFlashcard";
import {FlashcardGame} from "./components/Quiz.tsx";
import {FlashcardGameUI} from "./components/QuizUI.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <h1>Vite + React</h1>
          <h1 className="text-3xl font-bold underline">
              Hello world!
          </h1>
          <div className="card">
              <button onClick={() => { setCount((count) => count + 1); }}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
          <div className="p-10">
              <QuickFlashcard
                  question="Quelle est la capitale de l'Espagne ?"
                  options={['Madrid', 'Barcelone', 'Séville', 'Valence']}
                  correctAnswer="Madrid"
              />
          </div>
          <div className="p-10">
              <FlashcardGameUI
              />
          </div>
      </>
  )
}

export default App

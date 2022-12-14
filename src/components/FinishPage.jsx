import { useContext } from "react"
import { QuizContext } from '../Helpers/Contexts'
import Questions from "../data"


const FinishPage = () => {
  const {page, setPage} = useContext(QuizContext)
  const {score, setScore} = useContext(QuizContext)

  const restartQuiz = () => {
    setScore(0)
    setPage('main')
  }

  return (
    <div>
      <h1>Finish</h1>
      <h2>You got {score} / {Questions.length} correct!</h2>
      <h2>Score = {(score / Questions.length) * 100}%</h2>
      <button onClick={restartQuiz}>Re-start Quiz</button>
    </div>
  )
}

export default FinishPage
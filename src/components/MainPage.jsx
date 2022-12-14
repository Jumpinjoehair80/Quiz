import { useContext } from "react"
import { QuizContext } from "../Helpers/Contexts"

const MainPage = () => {
  const {page, setPage} = useContext(QuizContext)
  
  return (
    <div>
      <h1>Start Quiz</h1>
      <button onClick={() => setPage('quiz')}>Start</button>
    </div>
  )
}

export default MainPage
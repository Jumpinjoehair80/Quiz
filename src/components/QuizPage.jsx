import { useState, useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import axios from 'axios'
// import Questions from '../data'
import { useEffect } from 'react'

const QuizPage = () => {
  const [question, setQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")
  const {page, setPage} = useContext(QuizContext)
  const {score, setScore} = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState([])

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10&type=multiple").then((response) => {
      setCurrentQuestion(response.data.results[question])
    })
  }, [])

  const nextQuestion = () => {
    // if(optionChosen === Questions[question].answer){
    //   setScore(score + 1)
    // }
    
    // question >= 9 ? setPage('finish') : setQuestion(question + 1)

    console.log(question)
    setQuestion(question + 1)
    console.log(question)

  }


  return (
    <div>
      <h1>Quiz</h1>
      <h3>{currentQuestion.question}</h3>
      {/* <button onClick={() => setOptionChosen('A')}>{Questions[question].OptionA}</button>
      <button onClick={() => setOptionChosen('B')}>{Questions[question].OptionB}</button>
      <button onClick={() => setOptionChosen('C')}>{Questions[question].OptionC}</button>
      <button onClick={() => setOptionChosen('D')}>{Questions[question].OptionD}</button> */}
      <button onClick={nextQuestion}>{question === 10 ? 'Finish Quiz' : "Next Question"}</button>
    </div>
  )
}

export default QuizPage
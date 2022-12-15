import { useState, useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import Questions from '../data'
import axios from 'axios'


const QuizPage = () => {
  const [question, setQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")
  const {page, setPage} = useContext(QuizContext)
  const {score, setScore} = useContext(QuizContext)

  const nextQuestion = () => {
    if(optionChosen === Questions[question].answer){
      setScore(score + 1)
    }
    
    question >= Questions.length -1 ? setPage('finish') : setQuestion(question + 1)
  }

  const getQuestions = () => {
    axios.get("https://opentdb.com/api.php?amount=10&type=multiple").then((response) => {
      console.log(response.data.results[0])
    })
  }

  getQuestions()

  return (
    <div>
      <h1>Quiz</h1>
      <h3>{Questions[question].question}</h3>
      <button onClick={() => setOptionChosen('A')}>{Questions[question].OptionA}</button>
      <button onClick={() => setOptionChosen('B')}>{Questions[question].OptionB}</button>
      <button onClick={() => setOptionChosen('C')}>{Questions[question].OptionC}</button>
      <button onClick={() => setOptionChosen('D')}>{Questions[question].OptionD}</button>
      <button onClick={nextQuestion}>{question === Questions.length - 1 ? 'Finish Quiz' : "Next Question"}</button>
    </div>
  )
}

export default QuizPage
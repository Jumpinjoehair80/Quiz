import { useState } from 'react'
import MainPage from './components/MainPage'
import QuizPage from './components/QuizPage'
import FinishPage from './components/FinishPage'

import { QuizContext } from './Helpers/Contexts'

const App = () => {
  const [page, setPage] = useState('main')
  const [score, setScore] = useState(0)

  return (
    <div>
      <QuizContext.Provider value={{page, setPage, score, setScore}}>
        {page === 'main'  && <MainPage />}
        {page === 'quiz'  && <QuizPage />}
        {page === 'finish'  && <FinishPage />}
      </QuizContext.Provider>
    </div>
  )
}

export default App

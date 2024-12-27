import { useState } from 'react'
import Board from './components/Board'
import Regist from './components/Regist'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Board />} />
        <Route path='/regist' element={<Regist />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

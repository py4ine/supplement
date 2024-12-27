import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Text from './components/Text'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TodoList from './components/TodoList'
import Sample from './components/Sample'

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');
  const incresement = () => {
    setNumber(number+1);
    console.log(number);
  }
  return (
    <>
      {/* <Form name="Lee"/>
      <Form name="2ee"/>
      <p>{number}</p>
      <button onClick={incresement}>증가</button>
      <p>{text}</p>
      <input type='text' onChange={(e)=>setText(e.target.value)}></input> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Text/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/Todo" element={<TodoList />} />
          <Route path="/Sample" element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Text = () => {
    const navigate=useNavigate()
    const move = () => {
        navigate('/Form')
    }
    return (
    <>
    <div>Text</div>
    <Link to='/Form'>Home</Link><br></br>
    <button onClick={move}>이동하기</button>
    </>
  )
}

export default Text;
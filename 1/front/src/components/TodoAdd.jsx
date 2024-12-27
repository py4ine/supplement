import React, { useState } from 'react'

const TodoAdd = ({createTodo}) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        createTodo(value)        // 전송함수
        setValue('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="할 일을 입력해 주세요."
            onChange = {(e) => setValue(e.target.value) }
            value={value}
            />
            <button>할일 추가</button>
    </form>
  )
}

export default TodoAdd
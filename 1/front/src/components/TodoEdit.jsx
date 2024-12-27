import React, { useState } from 'react'

const TodoEdit = ({editTask, task}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        editTask(value, task.id)        // 전송함수
        setValue('')
    };

  return (
    <form onSubmit={handleSubmit}>
    <input 
        type="text"
        placeholder="할 일을 입력해 주세요."
        onChange = {(e) => setValue(e.target.value) }
        value={value}
        />
        <button>수정하기</button>
</form>
  )
}

export default TodoEdit
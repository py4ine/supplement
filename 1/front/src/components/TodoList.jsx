import React, { useState } from 'react'
import Todo from './Todo'
import TodoAdd from './TodoAdd'
import TodoEdit from './TodoEdit'

const TodoList = () => {
    const [todoValue, setTodoValue] = useState([]);
    const [id, setId] = useState(0);

    const createTodo = (l) => {
        setId(id+1)
        setTodoValue([...todoValue, { id: id, task: todo, isEdit:false}])
    };

    const editTodo = (id) => {
        setTodoValue(
            todoValue.map((todo) => 
                todo.id === id ? {...todoValue, isEdit:true} : todo ))
    };

    const deleteTodo = (id) => {
        setTodoValue(todoValue.filter((item) => item.id !== id))
    };

    const editTask = (task, id) => {
        setTodoValue(
            todoValue.map((item) => 
                item.id === id ? {...item, task:task, isEdit:false} : item
            )
        )
    }


  return (
    <div>
        <TodoAdd createTodo = {createTodo} />
        {todoValue.map((todo, idx) =>
        todo.isEdit ? (
        <TodoEdit key={idx} editTask={editTask} task={todo}/>
        ) : (
        <Todo key={idx} task={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>)
        )}
    </div>
  )
}

export default TodoList
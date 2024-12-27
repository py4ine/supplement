import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './reducers/counterReducer'
import { setUser, clearUser } from './actions/userAction'

function App() {
  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const setHandler = () => {
    dispatch(setUser({name: name, email: email}))
  }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>증가</button>
    <button onClick={()=>dispatch(decrement())}>감소</button>
    
    <h2>User Info</h2>
    <div>
      이름: <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /><br />
      이메일: <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <button onClick={setHandler}>저장</button>
    <button onClick={dispatch(clearUser())}>초기화</button>

    <h3>{user.name}</h3>
    <h3>{user.email}</h3>
    </>
  )
}

export default App

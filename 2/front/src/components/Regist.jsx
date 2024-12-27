import React, { useState } from 'react'
import '../styles/Regist.css'
import { useNavigate } from 'react-router-dom';

const Regist = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const postData = {
            title: title,
            content: content,
            user: user
        }

        const resposnse = fetch('http:localhost:8080/regist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })

        setTitle('');
        setContent('');
        setUser('');
        navigate('/');
    }

  return (
    <div className='regist-container'>
        <form onSubmit={submitHandler} >
            <div className = 'from-group'>
                <input
                    type='text'
                    placeholder='제목'
                    value={title}
                    onChange = {(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className = 'from-group'>
                <input
                    type='text'
                    placeholder='작성자'
                    value={user}
                    onChange = {(e)=>setUser(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <textarea
                    placeholder='내용'
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                />
            </div>
        </form>

    </div>
  )
}

export default Regist
import React, { useState, useEffect } from 'react';
import '../styles/board.css';
import { useNavigate } from 'react-router-dom';

const Board = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      fetch('http://localhost:8080')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    const btnHandler = () => {
      navigate('/regist')
    }

  return (
    <div className='board-container'>
        <div className='add-post-btn-container'>
          <button className='add-post-btn' onClick={btnHandler}>게시물 추가</button>
          </div>
            
        <table className='board-table'>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.board_no}</td>
                <td>{item.board_title}</td>
                <td></td>
                <td>{item.board_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    
  )
}

export default Board
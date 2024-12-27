import React, { useState, useEffect } from 'react'

const Sample = () => {
    const [value, setValue] = useState('');
    const fetchData = () => {
      const test = { message1 : "HaHaHa"};
        fetch('http://localhost:8000', {
            method : 'POST',
            headers: {
              'Content-Type' : 'application/json',
            },
            body : JSON.stringify( {data : [test, {message2 : "hello body"}]} )
        })
          .then((response) => response.json())
          .then((data) => setValue(data))
    }
    useEffect(()=> {
      fetchData()
    }, [])

  return (
    <div>{value.data[0]}</div>
  )
}

export default Sample
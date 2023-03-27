import React from 'react'
import { useState } from 'react'


const UseState = () => {
    const [text, setText] = useState('');

  return (
    <div>
        <input type="text" placeholder='write here....' onChange={(e)=> setText(e.target.value)}  />
        <hr />

        <h3> you write {text}</h3>
    </div>
  )
}

export default UseState
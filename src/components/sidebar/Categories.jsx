import React from 'react'

function Categories() {
    const handleClick = () =>{

    }
  return (
    <div className='categories'>
        <div className="title">Post Categories</div>
        <ul>
            <li onClick={() =>handleClick()}>Graphysic Design</li>
            <li onClick={() =>handleClick()}>Physic News</li>
            <li onClick={() =>handleClick()}>Uniben Broadcast</li>
            <li onClick={() =>handleClick()}>Ultimate</li>
            <li onClick={() =>handleClick()}>Daily Vibe</li>
        </ul>
    </div>
  )
}

export default Categories

import React from 'react'

function Comment(props) {

  return (
    <div className='comment'>
      <img src={props.userIcon} alt="" />
      <div className="rightBox">
        <div className="commenteeName">{props.user}</div>
        <p className="commentMessage">{props.comment}</p>
        <p className="time">{props.date}</p>
      {/* <Reaction key={props.id} { ...props} /> */}
      </div>
    </div>
  )
}

export default Comment

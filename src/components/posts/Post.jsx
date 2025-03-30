import React from 'react'
import { useNavigate } from 'react-router-dom'


function Post(props) {
  const navigate = useNavigate()

  const OpenSinglePage = (postId) => {
    navigate(`/posts/${postId}`)
  }


  return (
    <div className="post" onClick={() => OpenSinglePage(props.id)}>
      <img className='postImage' src={props.thumbnail} alt={props.image} />
      <div className="post-content">
        <div className="postInfo">
          <p className="postAuthor">Author:<b>{props.author} </b></p>
          <p className="postDate">{props.categoty}</p>
          <p className="postDate">{props.date}</p>
        </div>
        <p className='postTitle'>{props.title}</p>
        <p className='postContext'>{props.context}</p>
      </div>
    </div>
  )
}

export default Post

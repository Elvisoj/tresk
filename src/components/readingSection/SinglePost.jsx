import React from 'react'
import { useParams } from 'react-router-dom'
import Reaction from './Reaction'
import { UseDashboardContext } from '../../dataManagement/dashboardContext'
import CommentDialogBox from './CommentDialogBox'
import Comments from './Comments'

function SinglePost() {
  
  const { postId } = useParams()
  const { posts } = UseDashboardContext()

  const post = posts.find((post) => post.id === postId)
  
  if(!post) return <div className="notfound">Post not found</div>
  return (  
      <div className="singlePost">
        <div key={post.id} className="single-post-wrapper">
        <img src={post.image} alt="Flower Background" />
        <div className="content">
          <h3 className="singlePostAuthor"><i>Author:</i><b>{post.author}</b></h3>
          <h3 className="singlePostDate"><i>Date:</i><b>2 hours ago</b></h3>
          <div className="postData">
            <div className="singlePostTitle">{post.title}</div>
            <p className="singlePostContext">{post.context}</p>
          </div>
          <Reaction key={post.id} { ...post} />
          <Comments postId={post.id} /> 
          <CommentDialogBox postId={post.id}/>
        </div>
      </div>
    </div>
  )
}

export default SinglePost

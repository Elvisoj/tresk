import React, { useState } from 'react'
import Comment from './Comment'

import { UseDashboardContext } from '../../dataManagement/dashboardContext'
import getPost from '../utils/GetPost';


function Comments(props) {
  const { postId } = props;
  const { postsComments } = UseDashboardContext();
  const [ userComments, setUserComments ] = useState(getPost(postsComments, postId));
  
  
  console.log("userComments", userComments)
  
  
  if(!userComments) return <div className="noComments">Be the first to drop a comment and a reaction.</div>
  return (
    <div className='comments'>
      {userComments.comments?.map((comment) => <Comment key={comment.userId} {...comment} />)}
    </div>
  )
}

export default Comments

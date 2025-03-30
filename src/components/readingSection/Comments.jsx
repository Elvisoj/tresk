import React, { useState } from 'react'
import Comment from './Comment'

import { UseDashboardContext } from '../../dataManagement/dashboardContext'
import getPost from '../utils/GetPost';


function Comments(props) {
  const { postId } = props;
  const { postsComments } = UseDashboardContext();
  const [ userComments, setUserComments ] = useState(getPost(postsComments, postId).comments);
  
  console.log("userComments") 
  console.log(userComments)
  

  if(!setUserComments) return <div className="noComments">Be the first to drop a comment and a reaction.</div>
  return (
    <div className='comments'>
      {userComments?.map((comment) => <Comment key={comment.id} {...comment} />)}
    </div>
  )
}

export default Comments

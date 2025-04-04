import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { UseDashboardContext } from '../../dataManagement/dashboardContext';
import { createComments } from '../../api/createPosts';

import { fetchComments} from '../../api/fetchData';

function CommentDialogBox(props) {
  const { posts, setPostsComments } = UseDashboardContext()
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  const { postId } = props
  const randomId = uuidv4();
  const [userComment, setUserComment] = useState({
    userEmail: '',
    userName: '',
    userIcon: '',
    date: '',
    category: 'message',
    comment: '',
    reaction: {like: 0, dislike: 0, love: 0, hate: 0}
  });

  const handleOnChange = (e) => {
  
    setUserComment({
      ...userComment,
      userId: e.target.name === 'userEmail' ? randomId : userComment.userId,
      userName: e.target.name === 'userEmail' ? e.target.value.split('@')[0] : userComment.userName,
      userIcon: e.target.name === 'userEmail' ? `https://avatars.dicebear.com/api/avataaars/${e.target.value}.svg` : userComment.userIcon,
      date: e.target.name === 'userEmail' ? Date.now().toString : userComment.date,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    await createComments(userComment, postId)
    await fetchComments(setPostsComments, setLoading, setError);
  };
  
  return (
    <div className='CommentDialogBox'>
      <form onSubmit={onSubmitForm}>
        <input 
          name="userEmail" 
          type="email" 
          placeholder='Enter a valid email address' 
          onChange={handleOnChange} 
          required 
        />
        <select 
          name="category" 
          onChange={handleOnChange}
        >
          <option value="comment">Comment</option>
          <option value="rating">Rating</option>
          <option value="request">Request</option>
          <option value="message">Message</option>
        </select>
        <textarea 
          name="comment" 
          onChange={handleOnChange} 
          rows={10} 
          placeholder='Comment...' 
          required
        ></textarea>
        <button type='submit' className="btn">Submit Response</button>
      </form>
    </div>
  );
}

export default CommentDialogBox
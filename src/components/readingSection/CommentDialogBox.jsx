import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import getPost from '../utils/GetPost';
import { UseDashboardContext } from '../../dataManagement/dashboardContext';

function CommentDialogBox(props) {
  const { posts } = UseDashboardContext()
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
      userId:randomId,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log('Form submitted:', userComment);
    const selectedPosts = getPost(posts, postId).userComment;
    // selectedPosts.userComment
    console.log(selectedPosts)
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
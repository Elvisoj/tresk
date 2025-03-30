import React, { useState } from 'react'
import thumbnail1 from "../../assets/backgroung-image.jpg"
import { UseDashboardContext } from '../../dataManagement/dashboardContext'
import UseLocalStorage from '../hookes/UseLocalStorage'
import { v4 as uuidv4 } from 'uuid';


function PostForm(props) {
  const randomId = uuidv4();
  const {setData, getData} = UseLocalStorage("localPosts")

    const { posts, setPosts, setIsCreatePost, setIsDbClick } = UseDashboardContext()
    
    const [post, setPost ] = useState(props.post)


    const [ title, setTitle ] = useState(post.title)
    const [ author, setAuthor ] = useState(post.author)
    const [ context, setContext ] = useState(post.context)
    
    const [ thumbnail, setThumbnail ] = useState(post.thumbnail)
    const [ thumbnailPw, setThumbnailPw ] = useState(thumbnail)
    const [ category, setCategory ] = useState(post.category)

    const UpdateLocalPosts = ()=>{
      setData(posts)
      getData()
    }

    const handleThumbnailChange = (e)=>{setThumbnail(URL.createObjectURL(e.target.files[0]))}
    const handleSubmit = (e)=>{
      e.preventDefault();

      if (post.id) {
        setPost({
          title,
          author,
          description,
          context,
          category,
          id: 1,
          
          // thumbnail,
          // SPREAD PREVIOUS POST FIRST BEFORE CONTINUEING WITH THE UPDATED POST.
          // THANKS FOR YOUR PATIENCE
          // EOJ - DEV
          active: false,
        })
        const filteredPost = props.posts.map((p) => p.id != post.id)
        props.setPosts(filteredPost)
      } else{
        setPosts(prev => [ ...prev, {
          id: randomId,
          title,
          author,
          context,
          thumbnail,
          category,
          active: false,
          reaction: {
            like: 0,
            dislike: 0,
            love: 0,
            hate: 0
          },
        }])

      }
      
      setIsCreatePost(false)
      setIsDbClick(false)
      
      UpdateLocalPosts()
    }
  return (
    <div className='w-full h-full py-10'>

      <form className='px-[10%] flex flex-col'>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Title...' />
        <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder='Author...' />
        <img className="thumbnailPw" src={thumbnail} />
        <input type="file" onChange={handleThumbnailChange} />
        
        <select name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
          <option value="none">Select categories</option>
          <option value="designs">Designs</option>
          <option value="physic">Physics News</option>
          <option value="ads">Ads</option>
          <option value="uniben">Uniben News</option>
          <option value="pdf">Student Materials & pdf</option>
        </select>

        <textarea className='my-4' rows={5} type="text" onChange={(e) => setContext(e.target.value)} value={context} placeholder='Content...' ></textarea>
        <button className='btn' onClick={(e) => handleSubmit(e)}>Submit Form</button>
      </form>
    </div>
  )
}

export default PostForm

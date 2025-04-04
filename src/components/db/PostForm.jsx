import React, { useState } from 'react'
import { UseDashboardContext } from '../../dataManagement/dashboardContext'
import { v4 as uuidv4 } from 'uuid';
import {fetchPosts} from '../../api/fetchData';
import { supabase } from '../../lib/supabaseClient';


function PostForm(props) {

  const randomId = uuidv4();
  const { posts, setPosts, setIsCreatePost, setIsDbClick } = UseDashboardContext()  
  const [post, setPost ] = useState(props.post)
  const [ loading, setLoading ] = useState(false)
  const [ errors, setErrors ] = useState(null)

  const [ title, setTitle ] = useState(post.title)
  const [ author, setAuthor ] = useState(post.author)
  const [ context, setContext ] = useState(post.context)
  const [ thumbnail, setThumbnail ] = useState(post.thumbnail)
  const [file, setFile] = useState()
  const [ category, setCategory ] = useState(post.category)
  

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleThumbnailChange = async () => {
    if (!file) return;

    const fileName = `${randomId}-${file.name}`;
    try {
      const { data, error } = await supabase.storage
        .from('postimages')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        console.error('Error uploading thumbnail:', error.message);
        return;
      }

      const { data: publicURLData, error: urlError } = supabase.storage
        .from('postimages')
        .getPublicUrl(fileName);
        

      if (urlError) {
        console.error('Error fetching public URL:', urlError.message);
        return;
      }

      if (!publicURLData.publicUrl) {
        console.error('Public URL is null or undefined');
        return;
      }

      console.log('Thumbnail uploaded successfully:', publicURLData.publicUrl);
      return publicURLData.publicUrl;
    } catch (error) {
      console.error('Error handling thumbnail upload:', error.message);
    }
  };

  const submitPost = async (e) => {
    
    e.preventDefault();
    try {
      if (post.id) {
        const updatedPost = {
          title,
          author,
          context,
          category,
          thumbnail,
          active: false,
            date: getTodayDate()
          };

          const { data, error } = await supabase
          .from('posts')
          .update(updatedPost)
          .eq('id', post.id);
          
          if (error) {
            console.error('Error updating post:', error.message);
          } else {
            fetchPosts();
            console.log('Post updated successfully:', data);
          }
        } 
        else {
          const imageUrl = await handleThumbnailChange()
          if (!imageUrl)  console.error('Error uploading thumbnail image', imageUrl);
          const newPost = {
            id: randomId,
            title,
            author,
            context,
            thumbnail: imageUrl,
            category,
            isActive: false,
            date: getTodayDate(),
            reaction: {
              like: 0,
              dislike: 0,
              love: 0,
              hate: 0
            },
          };

          const { data, error } = await supabase
            .from('posts')
            .insert(newPost);

          if (error) {
            console.error('Error submitting post:', error.message);
          } else {
            fetchPosts(setPosts, setLoading, setErrors);
            console.log('Post submitted successfully:', data);
          }
        }
        setIsCreatePost(false)
        setIsDbClick(false)
      } catch (error) {
        console.error('Error submitting posts:', error.message);
      }
    }    
    
  return (
    <div className='w-full h-full py-10'>

      <form className='px-[10%] flex flex-col'>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Title...' />
        <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder='Author...' />
        <img className="thumbnailPw" src={thumbnail} />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        
        <select name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
          <option value="none">Select categories</option>
          <option value="designs">Designs</option>
          <option value="physic">Physics News</option>
          <option value="ads">Ads</option>
          <option value="uniben">Uniben News</option>
          <option value="pdf">Student Materials & pdf</option>
        </select>

        <textarea className='my-4' rows={5} type="text" onChange={(e) => setContext(e.target.value)} value={context} placeholder='Content...' ></textarea>
        <button className='btn' onClick={(e) => submitPost(e)}>Submit Form</button>
      </form>
    </div>
  )
}

export default PostForm



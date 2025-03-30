import React from 'react'
import { UseDashboardContext } from '../../dataManagement/dashboardContext'

function Posts() {
    
    const { posts, searchTerm } = UseDashboardContext();
  return (
    <div className='posts'>
      {/* {
        posts
            .filter((post) =>{
                return searchTerm.toLowerCase() === "" 
                ? post 
                : post.title.toLowerCase().includes(searchTerm.toLowerCase())
            })
            .map((post) => <p key={post.id}>{post.title}</p>)
      } */}
    </div>
  )
}

export default Posts

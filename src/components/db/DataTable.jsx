import React from 'react'
import "../../styles/TableDesign.css"

import { UseDashboardContext } from '../../dataManagement/dashboardContext';



function DataTable(props) {
    const lposts = props.posts;
    const { backToDashboardFxn, posts, setPosts, editPostDataFxn} = UseDashboardContext();

    const deletePostDataFxn = (postId) =>{
      const selectedPost = posts.filter((post) => post.id != postId)
      // console.log(selectedPost)
      setPosts(selectedPost)
    }

    // const editPostDataFxn = (postId) =>{
    //   const [selectedPost] = posts.filter((post) => post.id == postId)
    //   setCurentPost(selectedPost)
    //   setIsCreatePost(true);
    //   setIsManagePost(false);
    // }
    // if(!posts) return <div className="postsNotAvailable">Post Not Available</div>
    return (
      <div className='table-wrapper px-[10%] py-10'>
          <h2 className='text-2xl font-bold'>MANAGE TABLE DATA</h2>
          
        <table className='table w-full'>
          <thead>
              <tr className='table-heading bg-[gold]'>
                  <td>POST_ID</td>
                  <td>POST_TITLE</td>
                  <td>POST_CATEGORY</td>
                  <td>POST_STATUS</td>
                  <td>CONTROLS</td>
              </tr>
          </thead>
          <tbody>
              {posts?.length > 0 ? (posts.map((post) => 
                  <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.category}</td>
                      <td>{post.isActive === true ? "Editted" : "Not Editted"}</td>
                      <td className='controls flex flex-row gap-3'>
                          <button className="edit-data bg-[gold] w-fit h-fit px-3 py-2 rounded cursor-pointer " onClick={()=> editPostDataFxn(post.id)}>✒️</button>
                          <button className="delete-data bg-[gold] w-fit h-fit px-3 py-2 rounded cursor-pointer" onClick={()=> deletePostDataFxn(post.id)}>❌</button>
                      </td>
                  </tr>
              )): (<tr className="postsNotAvailable">Post Not Available</tr>)}
          </tbody>
        </table>

        <button className="back-todb btn" onClick={backToDashboardFxn}>Back to Dashboard</button>
      </div>
    )
}

export default DataTable

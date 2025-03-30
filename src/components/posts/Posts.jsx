import React from 'react'
import './posts.css';
import Post from './Post';
import { UseDashboardContext } from '../../dataManagement/dashboardContext';

function Posts(props) {
    const {searchTerm } = UseDashboardContext();
    const posts = props.posts;

    if(!posts) return <div className="postsNotFound">Posts not available at the moment</div>
    return (
        <div className='posts'>
            <div className="posts-wrapper">

                {posts.filter((post) =>{
                    return searchTerm.toLowerCase() === "" 
                    ? post 
                    : post.title.toLowerCase().includes(searchTerm.toLowerCase())
                }).map((post) => <Post key={post.id} { ...post} />)}

            </div>
        </div>
    )
}

export default Posts

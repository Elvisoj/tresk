import React, { useState } from 'react'
import PostForm from '../components/db/PostForm';
import Posts from '../components/db/Posts';

import DataTable from '../components/db/DataTable';
import { UseDashboardContext } from '../dataManagement/dashboardContext';

function Dashboard() {

    const { posts, formData, setFormData,  isCreatePost, isManagePost, isDbClick, currentPost } = UseDashboardContext()

    
    return (
        <div className='dashboard w-full h-full text-red-500'>
            <div className="dashboard-wrapper">

            {!isDbClick && 
                <div className="top-layer flex flex-col md:flex-row gap-4 py-5 px-[10%]">
                    <Posts />
                    <div className='box'>User Profile</div>
                </div>
            }
            {isDbClick && 
                <div className="bottom-layer w-full h-full">
                    {isManagePost && <DataTable posts={posts} />}
                    {isCreatePost && <PostForm post={currentPost ? currentPost : formData } />}
                </div>
            }
            </div>
        </div>
    )
}


export default Dashboard

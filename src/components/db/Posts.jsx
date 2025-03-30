import React from 'react'
import { UseDashboardContext } from '../../dataManagement/dashboardContext'

function Posts(props) {
    const { createPostFxn, managePostFxn } = UseDashboardContext()
    return (
        <div className='box col design-dashboard w-full bg-white rounded-md p-3'>
        <h1 className='uppercase font-extrabold text-2xl mb-4'>{props.title}</h1>
        <ul>
            <li className='cursor-pointer' onClick={() => createPostFxn()}>Create NewPost</li>
            <li className='cursor-pointer' onClick={() => managePostFxn()}>Manage Post</li>
        </ul>

        </div>
  )
}

export default Posts

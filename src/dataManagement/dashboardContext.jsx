import React, { createContext, useContext, useEffect, useState } from 'react'
import { defaultPosts, defaultPostsComments } from '../api/api';
import assets from '../assets/assets';
import SortArray from '../components/utils/SortArray';
import UseLocalStorage from '../components/hookes/UseLocalStorage';

const dashboardContext = createContext();


function ContextProvider(props) {
    const { getData } = UseLocalStorage()
    const [ posts, setPosts ] = useState(defaultPosts || [])
    const [ postsComments, setPostsComments ] = useState(defaultPostsComments || [])
    const [ latestPosts, setLatestPosts ] = useState(SortArray(posts))
    const [ formData, setFormData ] = useState({
        title: "",
        author: "",
        description: "",
        content: "",
        image: "",
        isActive: false
    });
    const [ searchTerm, setSearchTerm ] = useState("")
    const [ isDbClick, setIsDbClick ] = useState(false);
    const [ isCreatePost, setIsCreatePost ] = useState(false)
    const [ isManagePost, setIsManagePost ] = useState(false);
    const [ currentPost, setCurentPost ] = useState(false);

    // // KEEP OFF

    const createPostFxn = () => { 
        setIsCreatePost(!isCreatePost)
        setIsDbClick(true)
        setIsManagePost(false)
    } 
    const managePostFxn = () => { 
        setIsDbClick(true)
        setIsManagePost(true)
    } 
    const backToDashboardFxn = () => { 
        setIsDbClick(false)
        setIsManagePost(false)
    } 
    const editPostDataFxn = (postId) =>{
        const [selectedPost] = posts.filter((post) => post.id == postId)
        setCurentPost(selectedPost)
        setIsCreatePost(true);
        setIsManagePost(false);
      }
    
    const createPostFxnE = () => { 
        isCreatePost(!isCreatePost) 
        setIsDbClick(true)
    }

    const [displayMenu, setDisplayMenu ] = useState(false);
    const backToHomeFxn = (boolean) => { boolean(false)}
    const ToggleMenuOnFxn = ()=>{ setDisplayMenu(true) }
    const ToggleMenuOffFxn = ()=>{ setDisplayMenu(false) }

    const data = {
        posts, setPosts,
        latestPosts, setLatestPosts,
        searchTerm, setSearchTerm,
        formData, setFormData,
        currentPost, setCurentPost,
        postsComments, setPostsComments,

        // BOOLEANS
        isDbClick, setIsDbClick,
        isCreatePost, setIsCreatePost,
        isManagePost, setIsManagePost,

        // FUNCTIONS
        createPostFxn,
        managePostFxn,
        ToggleMenuOffFxn,
        ToggleMenuOnFxn,
        backToHomeFxn,
        backToDashboardFxn,
        editPostDataFxn,

        // displayMenu, setDisplayMenu,
        // currentPost, setCurentPost,
        // editPostData,

        // backToDashboard,
    
        // ,
        // isDbClick, setIsDbClick,

        // blogPosts, setBlogPosts,
        // isCreateBlogPost, setIsCreateBlogPost,
        

        // designPosts, setDesignPost,
        // isCreateDesignPost, setIsCreateDesignPost,
        // isManageDesignPost,
        // createDesignPostFxn,
    }
    
    return (
        <dashboardContext.Provider value={data} >
            {props.children}
        </dashboardContext.Provider>
      )
}

export const UseDashboardContext = () =>{
    const data = useContext(dashboardContext)
    if(data === undefined) throw new Error("Data is undefined")
    return data
    
}

export default ContextProvider;
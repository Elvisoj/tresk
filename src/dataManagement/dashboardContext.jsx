import React, { createContext, useContext, useEffect, useState } from 'react'
import { defaultPosts, defaultPostsComments } from '../api/api';
import UseLocalStorage from '../components/hookes/UseLocalStorage';
import { fetchComments, fetchPosts } from '../api/fetchData';

const dashboardContext = createContext();


function ContextProvider(props) {
    const { getData } = UseLocalStorage()
    const [ posts, setPosts ] = useState([])
    const [ postsComments, setPostsComments ] = useState([])
    
    const [postLoading, setPostLoading ] = useState(true)
    const [postErrors, setPostErrors ] = useState(null)
    const [commentLoading, setCommentLoading ] = useState(true)
    const [commentErrors, setCommentErrors ] = useState(null)

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

    
    useEffect(() => {
        fetchPosts(setPosts, setPostLoading, setPostErrors);
        fetchComments(setPostsComments, setCommentLoading, setCommentErrors);
    }, []);
    
    const data = {
        posts, setPosts,
        searchTerm, setSearchTerm,
        formData, setFormData,
        currentPost, setCurentPost,
        postsComments, setPostsComments,

        postLoading, setPostLoading,
        postErrors, setPostErrors ,

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
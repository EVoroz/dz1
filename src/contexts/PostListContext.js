import React from 'react'
import { createContext,  } from "react";
import usePosts from "../hooks/usePosts";




const PostListContext = createContext()

const PostListProvider = ({children}) => {

    const { posts, createPost, deletePost, clearAllPosts, LSPostsKey, openModal, closeModal, viewModal } =
    usePosts();


    return (
        <PostListContext.Provider 
         value={{ posts, createPost, deletePost, clearAllPosts,LSPostsKey, openModal, closeModal, viewModal }}>
            {
                children
            }

        </PostListContext.Provider>
    )
}

export default PostListProvider
export {
    PostListContext
}
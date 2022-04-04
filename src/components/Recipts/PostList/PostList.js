import React from 'react'
import { useContext } from "react"
import { PostListContext } from "../../../contexts/PostListContext"
import PostItem from "./PostItem/PostItem"



const PostList = () => {

    const {posts} = useContext(PostListContext)

    return (
<div className="row row-cols-3 mx-7 " >
            
              {posts.length ? posts.map((post, i)=> {
                  return(
                      <PostItem 
                      key={post.id}
                      index={i}
                      id={post.id}
                      post={post.post}
                      text={post.text}
                      image={post.image}
                      tags={post.tags} />
                  )
              }) :<p>List emty....</p>
            }

            
        </div>
    )
}

export default PostList

import { useContext } from "react"
import { PostListContext } from "../../../contexts/PostListContext"
import PostItem from "./PostItem/PostItem"



const PostList = () => {

    const {posts} = useContext(PostListContext)

    return (
<div>
            <ul className="list-group">
              {posts.length ? posts.map((post, i)=> {
                  return(
                      <PostItem 
                      key={post.id}
                      index={i}
                      id={post.id}
                      post={post.post}
                      products ={post.products}
                      text={post.text}
                      image={post.image}
                      tags={post.tags} />
                  )
              }) :<p>List emty....</p>
            }

            </ul>
        </div>
    )
}

export default PostList
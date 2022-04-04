import React, { useContext } from "react"
import { useState } from "react"
import { PostListContext } from "../../../contexts/PostListContext"
import PostItem from "../PostList/PostItem/PostItem.jsx"

const Search = () => {
	const [search, setSearch] = useState('')
   const [posts,setPosts] = useState([])
	const filterPost = posts.filter(post => {
		return post.post.toLowerCase().includes(search.toLowerCase())
	})
    
	return(
    <>
		<form className="d-flex flex-column align-items-center">
		<div className="mb-3">
		  <input
			type="text"
			name="name"
			placeholder="Поиск..."
			className="form-control"
			id="exampleInputEmail1"
			onChange={(e)=> setSearch(e.target.value)}
			value={search} />
		</div>
	  </form>

<div className="row row-cols-1 mx-5 " >
				{filterPost.map((post, i)=> {
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
					})
}
			</div>	
            </>     
    ) }

    export default Search          




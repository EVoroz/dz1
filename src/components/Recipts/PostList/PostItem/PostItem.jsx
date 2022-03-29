import { useContext } from "react"
import { Link } from "react-router-dom"
import { PostListContext } from "../../../../contexts/PostListContext"


const PostItem =({id, index, post,products, image, tags, input}) => {
const {deletePost} = useContext(PostListContext)
const deleteHandler = () => deletePost(id)

return (
    <div class="card mb-3 w-55" >
    <li className="list-group-item">
    
        <span>
            {index + 1}. {post}
            
            <div className="row g-0">

    <div class="col-md-2 mt-2">
            <img src={image} width={300} height={300} className="img-fluid rounded-start" alt="img" />   
            </div>
            <div className="col-md-9">
      <div class="card-body">
            <div>{post}</div>
            
            <p className="card-text">{products}</p>

            <div>{input}</div>
            <div>#{tags}</div>
            </div>
            </div>
            </div>
        </span>
       
       
        <div>
            <button onClick={deleteHandler} type="button"
             className="btn btn-danger">Удалить рецепт</button>
             <p className="m-1"><Link className="link-danger" to={`/${id}`}>Подробнее</Link></p>
        </div>
        
    </li>
    </div>
)

}

export default PostItem


import { useContext } from "react"
import { Link } from "react-router-dom"
import { PostListContext } from "../../../../contexts/PostListContext"


const PostItem =({id, index, post,image, tags, input}) => {
const {deletePost} = useContext(PostListContext)
const deleteHandler = () => deletePost(id)

return (
    <div className="card m-2 bg-danger p-2 text-dark bg-opacity-10  shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
    <li className="list-group-item">
    
        <span>
            {index + 1}. {post}
            
            <div className="row g-0">

            <img src={image} width={300} height={300} className="img-fluid rounded-start mt-2" alt="img" />   
           
      <div class="card-body">
           
            <div>{input}</div>
            <div className="tag">#{tags}</div>
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


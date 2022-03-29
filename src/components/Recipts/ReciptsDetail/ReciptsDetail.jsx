import { useContext, } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostListContext } from "../../../contexts/PostListContext"



const ReciptsDetail = () => {
  const { posts } = useContext(PostListContext)
    const navigate = useNavigate()
    const {id} = useParams()
   
    const dataForPost = posts.find((post) => post.id === +id)
     

    return (
        <>
        <div className="card" style={{ width: '28rem' }} >
        <img src={dataForPost.image} width={400} height={350} className="img-fluid rounded-start" alt="img" /> 
        <div className="card-body">
          <h5 className="card-title">{dataForPost.post}</h5>
           <p className="card-text">{dataForPost.products}</p>
          <div>{dataForPost.text}</div>
            <div>#{dataForPost.tags}</div>
          <button type="button" onClick={() => navigate(-1)} className="btn btn-primary mx-1">Go back</button >
          
           </div>
      </div>
        </>
    )
}

    
export default ReciptsDetail

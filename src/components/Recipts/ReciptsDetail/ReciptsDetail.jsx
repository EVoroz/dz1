import React from 'react'
import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostListContext } from "../../../contexts/PostListContext"
import Modal from "../../Modal/Modal"
import RedaktForm from "../RedaktForm/RedaktForm"



const ReciptsDetail = () => {
  const { posts } = useContext(PostListContext)
    const navigate = useNavigate()
    const {id} = useParams()
    const [viewModal, setViewModal] = useState(false)
   
    const dataForPost = posts.find((post) => post.id === +id)
    
   
    
    const openModal = () => {
      setViewModal(true)
    }
    const closeModal = () => {
      setViewModal(false)
    }
    
   
    return (
        <>
         
        <div className="card" style={{ width: '50rem' }} >
        <img src={dataForPost.image} width={400} height={350} className="img-fluid rounded-start" alt="pic" /> 
        <div className="card-body">
          <h5 className="card-title">{dataForPost.post}</h5>
         
          <div>{dataForPost.text}</div>
            <div className="tag">#{dataForPost.tags}</div>
          <button type="button" onClick={() => navigate(-1)} className="btn btn-primary mt-2 mx-1">Go back</button >
          <button type="button" onClick={openModal} className="btn btn-success mt-2 mx-1">Edit</button>
           </div>
      </div>
      
      <Modal
            
            state={viewModal}
            onClose={closeModal}>

                <RedaktForm 
                  createHandler={()=>{}} 
                  {...dataForPost}
                />
              </Modal>
         
        </>
    )
}

    
export default ReciptsDetail

import React from 'react'
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { PostListContext } from "../../../contexts/PostListContext"

function RedaktForm ({onSubmit, image ='', input = '', tags = '', post = ''}) {

 
  const [mes, setMes] = useState(input)
  const [photo, setPhoto] = useState(image)
  const [tag, setTag] = useState(tags)
  const [title, setTitle] = useState(post)

  const {posts} = useContext(PostListContext)

  const {id} = useParams()
  const { closeModal} = useContext(PostListContext)
  const {LSPostsKey} =  useContext(PostListContext)
  
 
  
  const indexPost = posts.findIndex((post) => post.id === +id)
 posts[indexPost].image = photo
   posts[indexPost].post = title
   posts[indexPost].input = mes
   posts[indexPost].tags = tag 

   const changeTitle = (e) => setTitle(e.target.value)
  const changePhoto = (e) => setPhoto(e.target.value)
  const changeMes = (e) => setMes(e.target.value)
  const changeTag = (e) => setTag(e.target.value)

  const createSubmit = (e) => {
    e.preventDefault()

    const mesTrim = mes.trim()
    const titleTrim = title.trim()
    const photoTrim = photo.trim()
    const tagTrim = tag.trim()
    if (mesTrim && titleTrim && photoTrim && tagTrim) {

      setTitle(title)
      setPhoto(photo)
      setMes(mes)
      setTag(tag)
    }

    localStorage.setItem(LSPostsKey, JSON.stringify(posts))
    closeModal()
      };

  return(

<form onSubmit={createSubmit}>

<div className="mb-3 w-300" >

<input type="text" name="name" className="form-control mb-3"
 id="exampleInputEmail1" aria-describedby="emailHelp"
  placeholder="Название рецепта"
  value={title}
  onChange={changeTitle}
  />
  
<input type="text" name="pic" className="form-control mb-3"
 id="exampleInputEmail1" aria-describedby="emailHelp"
  placeholder="фото рецепта"
  value={photo}
  onChange={changePhoto}
  />

<input type="text" name="mes" className="form-control mb-3"
 id="exampleInputEmail1" aria-describedby="emailHelp"
  placeholder="рецепт по шагам"
  value={mes}
  onChange={changeMes}
  />

<input type="text" name="tag" className="form-control mb-3"
 id="exampleInputEmail1" aria-describedby="emailHelp"
  placeholder="# tag"
  value={tag}
  onChange={changeTag}
  />
  
</div>
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button type="submit" className="btn btn-primary">Сохранить</button>
  </div>
</form>

  )
}



export default  RedaktForm
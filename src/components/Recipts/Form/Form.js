import { useContext, useState } from "react"
import { PostListContext } from "../../../contexts/PostListContext"



const Form = () => {

    const [input, setInput] = useState('')
    const [image, setImage] = useState('')
    const [tags, setTags] = useState('')
    const [post, setPost] = useState('')
    

    const { createPost } = useContext(PostListContext);

    const changeHandler = (e) => setInput(e.target.value)
    const changePost = (e) => setPost(e.target.value)
    const changeTags = (e) => setTags(e.target.value)
    const changeImage = (e) => setImage(e.target.value)
    

    const submitHandler = (e) => {
      e.preventDefault()

      const inputTrim = input.trim()
      const imageTrim = image.trim()
      
      const postTrim = post.trim()
      const tagstTrim = tags.trim()

      if(inputTrim && postTrim && imageTrim && tagstTrim ) {
        createPost(inputTrim, postTrim, imageTrim, tagstTrim)

        setInput('')
        setPost('')
        
        setImage('')
        setTags('')
      }
    }
    

    return (

<form onSubmit={submitHandler}>

<div className="mb-3 w-200" >

<input type="text" name="name" className="form-control mb-3"
 id="exampleInputEmail1" aria-describedby="emailHelp"
  placeholder="Название рецепта"
  value={post}
  onChange={changePost}
  />
  
<input type="text" name="pic" className="form-control mb-3"
 id="exampleInputEmail1" aria-describedby="emailHelp"
  placeholder="фото рецепта"
  value={image}
  onChange={changeImage}
  />

<input type="text" name="mes" className="form-control mb-3"
 id="exampleInputEmail1" aria-describedby="emailHelp"
  placeholder="рецепт по шагам"
  value={input}
  onChange={changeHandler}
  />

<input type="text" name="tag" className="form-control mb-3"
 id="exampleInputEmail1" aria-describedby="emailHelp"
  placeholder="# tag"
  value={tags}
  onChange={changeTags}
  />
  
</div>
  
  <button type="submit" className="btn btn-primary">Добавить рецепт</button>
</form>

    )
}

export default Form
import { useState } from "react"

const Search = () => {
    const [searchForm, setSearchForm] = useState('')
    const changeHandler = (e) => {
        setSearchForm(e.target.value)
      }
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
          onChange={changeHandler}
          value={searchForm}
        />
      </div>
    </form>
    </>
    )
}

export default Search
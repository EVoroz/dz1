
import Form from './Form/Form';
import PostList from './PostList/PostList';
import Search from "../Recipts/SearchPost/Search";
const Recipts = () => {
	
	

	return (
		<>
		<div className="d-flex mt-3 justify-content-evenly">
         <img src="./img/recip2.jpg"  width={450} height={300} alt="picc" /> 
         <img src="./img/recip1.jpg" width={450} height={300} alt="picc" />   
       </div>
	   <hr />
 
	   <div className="d-flex mt-3 mb-4 justify-content-evenly">
<Form />

<Search />
</div>
<PostList />

		</>

	)
	}
	


export default Recipts
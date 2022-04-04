import React from 'react';
import Form from './Form/Form';
import PostList from './PostList/PostList';
import Search from './Search/Search.jsx';

const Recipts = () => {
	
	return (
		<>
		<div>
		<Search />
		</div>
	   <hr />
 
	   <div className="d-flex mt-3 mb-4 justify-content-evenly">
<Form />
</div>
<PostList />

		</>
	)
	}
	
export default Recipts
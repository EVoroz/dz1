import { useEffect, useState } from "react"

const LSPostsKey = "posts";

const usePosts = () => {

    const [posts, setPosts] = useState([]);

    const createPost = async (text, post,category, image, tags) => {
        const newPost = {
            id: Date.now(), text, post,category, image, tags,
        }
         setPosts((prev) => [...prev, newPost]);
    }

const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const clearAllPosts = () => {
    setPosts([]);
  };

  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSPostsKey);

    if (dataFromLS) {
      setPosts(JSON.parse(dataFromLS));

    } else {

			fetch('https://jsonplaceholder.typicode.com/todos/?_limit=2')
				.then(res => res.json())
				.then(data => data.map(({title, userId, ...rest}) => ({...rest, text: title})))
				.then(setPosts)
		}
  }, []);

  useEffect(() => {
    localStorage.setItem(LSPostsKey, JSON.stringify(posts));
  }, [posts]);


	return ({
		posts,
		createPost,
		deletePost,
		clearAllPosts,
	})
};

export default usePosts 
 

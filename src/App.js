import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Post from './components/post';
import Pagination from './components/pagination';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container text-center mt-5">
      <h1 className='mb-5 text-info'>React Pagination Example</h1>
      <Post posts={currentPosts} loading={loading} />
      <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;

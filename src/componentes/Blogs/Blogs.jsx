import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({handleAddToBookmarks, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      {
      blogs.map((blog) => (
        <Blog 
        key={blogs.id} 
        blog={blog}
        handleAddToBookmarks={handleAddToBookmarks}
        handleMarkAsRead={handleMarkAsRead}
        ></Blog>))
      }
    </div>
  );
};
Blogs.propTypes ={
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired

}
export default Blogs;

import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="rounded-2xl"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between mt-8 items-center">
        <div className="flex">
          <img className="w-16" src={author_img} alt={`author_img`} />
          <div className="ml-6">
            <h2 className="text-2xl font-bold">{author}</h2>
            <h5 className="text-base font-semibold">{posted_date}</h5>
          </div>
        </div>
        <div className="text-xl">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmarks(blog)} className="mr-5 ml-3"><FaRegBookmark></FaRegBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl font-bold my-4">{title}</h2>
      <p>
        {
            hashtags.map((hash ,idx) => <span key={idx}><a href=""> {hash}</a></span>)
        }
      </p>
      <button onClick={()=>handleMarkAsRead(id, reading_time)} className="border-b-2 mt-4 underline font-semibold text-purple-800">Mark as read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;

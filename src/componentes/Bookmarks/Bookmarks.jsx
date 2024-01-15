import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="rounded-xl bg-purple-200 border-2 border-purple-700">
        <h2 className="text-center font-bold text-2xl p-6 text-purple-600">
          Spent time on read :{readingTime} min
        </h2>
      </div>

      <div className="bg-slate-300 rounded-xl pb-4">
        <h2 className="text-3xl font-bold ml-5 my-8">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  ); 
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;

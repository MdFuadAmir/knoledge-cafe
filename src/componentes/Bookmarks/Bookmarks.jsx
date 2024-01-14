import PropTypes from "prop-types";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-3xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
            <div>
                
            </div>
            
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.object.isRequired
}

export default Bookmarks;
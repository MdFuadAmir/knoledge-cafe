import { useState } from 'react'
import './App.css'
import Blogs from './componentes/Blogs/Blogs'
import Bookmarks from './componentes/Bookmarks/Bookmarks'
import Header from './componentes/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks   = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead =  ( id, time) => {
    const newReadingTime = (readingTime + time);
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark 
    const remainingBokMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBokMarks);
  }
  
  return (
    <>
    <Header></Header>
    <div className='md:flex my-12 mx-2 md:mx-6 gap-6'>
    <Blogs 
    handleAddToBookmarks={handleAddToBookmarks}
    handleMarkAsRead={handleMarkAsRead}
    ></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

    </div>

      
        
    </>
  )
}

export default App

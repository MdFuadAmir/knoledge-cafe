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
  const handleMarkAsRead =  time => {
    const newReadingTime = (readingTime + time);
    setReadingTime(newReadingTime);
    // const newReadingTime = [...readingTime + time];
    // setReadingTime(newReadingTime);
    // 2 line == 1 line
    //  setReadingTime(readingTime + time); 
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

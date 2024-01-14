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
  
  return (
    <>
    <Header></Header>
    <div className='md:flex my-12 mx-2 md:mx-6 gap-6'>
    <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>

    </div>

      
        
    </>
  )
}

export default App

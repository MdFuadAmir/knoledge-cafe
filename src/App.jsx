import './App.css'
import Blogs from './componentes/Blogs/Blogs'
import Bookmarks from './componentes/Bookmarks/Bookmarks'
import Header from './componentes/header/Header'

function App() {
  

  return (
    <>
    <Header></Header>
    <div className='md:flex my-12'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>

    </div>

      
        
    </>
  )
}

export default App

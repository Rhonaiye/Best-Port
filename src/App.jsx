import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Blog from './Components/Blog'



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  
  <Router>
        
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Blogs' element={<Blog/>}/>
          </Routes>
      </Router>
    
  
  
  </>


  )
}

export default App

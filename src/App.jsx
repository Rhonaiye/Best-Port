import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import RockPaperGame from './Pages/RPG'
import Quote from './Pages/Quote'
import Task from './Pages/Todo'
import Blog from './Pages/Blog'



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  
  <Router>
        
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/QuoteGenerator' element={<Quote/>}/>
              <Route path='/RPG-GAME' element={<RockPaperGame/>}/>
              <Route path='/To-do-app' element={<Task/>}/>
              <Route path='/Blogs' element={<Blog/>}/>

             
          </Routes>
      </Router>
    
  
  
  </>


  )
}

export default App

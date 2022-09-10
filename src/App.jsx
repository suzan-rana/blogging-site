import React from 'react'
import './App.css'
import Home from './pages/Home/index'
import Blog from './pages/Blog/index'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
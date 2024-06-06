import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom';
import Resume from './Components/Resume';
import Home from './Components/Home'
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='resume' element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

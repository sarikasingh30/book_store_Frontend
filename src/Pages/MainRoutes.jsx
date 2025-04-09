import React from 'react'
import { Routes, Route } from 'react-router'
import  AuthPage from './AuthPage'
import { Home } from './Home'
import AllBooks from './AllBooks'
import NotFound from './NotFound'
import SingleBook from './SingleBook'

function MainRoutes() {
  return (
    <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/books" element={<AllBooks/>} />
        <Route path="/books/:id" element={<SingleBook/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default MainRoutes
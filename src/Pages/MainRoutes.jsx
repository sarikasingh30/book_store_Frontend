import React from 'react'
import { Routes, Route } from 'react-router'
import { Home } from './Home'
import AllBooks from './AllBooks'
import NotFound from './NotFound'
import SingleBook from './SingleBook'
import { ProtectedRoute, PublicRoute } from '../components/auth/AuthRoute'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Cart from './Cart'
import Wishlist from './Wishlist'
import DummyCheckout from '../components/DummyCheckout'

function MainRoutes() {
  return (
    <Routes>
        
        <Route path="/" element={<Home/>}/>
       
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register/>
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login/>
            </PublicRoute>
          }
        />
        
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile/>
              </ProtectedRoute>
          }
        />
        <Route path="/cart/:userId" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
        <Route path="/wishlist/:userId" element={<ProtectedRoute><Wishlist/></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><DummyCheckout/></ProtectedRoute>} />

        <Route path="/books" element={<AllBooks/>} />
        <Route path="/books/:id" element={<SingleBook/>} />

        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default MainRoutes
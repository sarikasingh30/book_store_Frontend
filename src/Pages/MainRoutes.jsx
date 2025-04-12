import React from 'react'
import { Routes, Route } from 'react-router'
// import  AuthPage from './AuthPage'
import { Home } from './Home'
import AllBooks from './AllBooks'
import NotFound from './NotFound'
import SingleBook from './SingleBook'
import AuthRoute from '../components/auth/AuthRoute'
import Login from './Login'
import Register from './Register'

function MainRoutes() {
  return (
    <Routes>
        
        <Route
        path="/login"
        element={
          <AuthRoute redirectTo="/">
            <Login />
          </AuthRoute>
        }
      />

      <Route
        path="/register"
        element={
          <AuthRoute redirectTo="/">
            <Register />
          </AuthRoute>
        }
      />

      <Route
        path="/"
        element={
          <AuthRoute requiresAuth={true} redirectTo="/login">
            <Home />
          </AuthRoute>
        }
      />
        <Route path="/books" element={<AllBooks/>} />
        <Route path="/books/:id" element={<SingleBook/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default MainRoutes
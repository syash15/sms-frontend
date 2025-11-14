
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Attendance from './pages/Attendance'
import Results from './pages/Results'
import Admin from './pages/Admin'

export default function App(){
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
        <Route path="/attendance" element={<PrivateRoute><Attendance/></PrivateRoute>} />
        <Route path="/results" element={<PrivateRoute><Results/></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>} />
      </Routes>
    </div>
  )
}
    
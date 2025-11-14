
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../utils/auth'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={()=>setOpen(!open)} className="p-2 rounded bg-gray-100">☰</button>
          <Link to="/dashboard" className="font-bold text-lg">SMS</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/profile" className="text-gray-600">Profile</Link>
          <button onClick={logout} className="text-red-500">Logout</button>
        </div>
      </div>
      {open && (
        <div className="px-4 py-3 bg-gray-50">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <Link to="/dashboard" className="block">Dashboard</Link>
            <Link to="/attendance" className="block">Attendance</Link>
            <Link to="/results" className="block">Results</Link>
            <Link to="/admin" className="block">Admin</Link>
            <Link to="/register" className="block">Register</Link>
          </div>
        </div>
      )}
    </div>
  )
}
    
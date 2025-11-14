
import React, { useState } from 'react'
import api from '../services/api'
import { Link, useNavigate } from 'react-router-dom'

export default function Register(){
  const [form, setForm] = useState({ name:'', username:'', password:'', confirm:'', age:'', course:'' })
  const [error,setError] = useState(null)
  const navigate = useNavigate()

  const handle = e=> setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e=>{
    e.preventDefault()
    if(form.password !== form.confirm){ setError('Passwords do not match'); return }
    try{
      await api.post('/students', { name: form.name, age: form.age, course: form.course, username: form.username, password: form.password })
      navigate('/login')
    }catch(err){ setError(err.response?.data?.message || 'Registration failed') }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Student Registration</h2>
        {error && <div className="text-red-500 mb-3">{error}</div>}
        <form onSubmit={submit} className="grid grid-cols-1 gap-3">
          <input name="name" value={form.name} onChange={handle} placeholder="Full name" className="p-3 border rounded" required />
          <input name="username" value={form.username} onChange={handle} placeholder="Username (unique)" className="p-3 border rounded" required />
          <input name="age" value={form.age} onChange={handle} placeholder="Age" className="p-3 border rounded" />
          <input name="course" value={form.course} onChange={handle} placeholder="Course" className="p-3 border rounded" />
          <input name="password" value={form.password} onChange={handle} type="password" placeholder="Password" className="p-3 border rounded" required />
          <input name="confirm" value={form.confirm} onChange={handle} type="password" placeholder="Confirm Password" className="p-3 border rounded" required />
          <button className="bg-green-600 text-white p-3 rounded">Register</button>
        </form>
        <p className="mt-4 text-center text-sm">Already registered? <Link to="/login" className="text-indigo-600">Login</Link></p>
      </div>
    </div>
  )
}
    
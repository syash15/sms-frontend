import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    course: ""
  });
  const [err, setErr] = useState(null);
  const nav = useNavigate();

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setErr(null);
    if (form.password !== form.confirm) {
      setErr("Passwords do not match");
      return;
    }
    try {
      // Use the auth register endpoint (matches your backend auth.js)
      await api.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        course: form.course // optional extra field if backend ignores or stores it
      });
      nav("/login");
    } catch (e) {
      // show server message if present
      setErr(e.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="center-screen">
      <div className="card">
        <div className="card-left">
          <h2 className="hero-title">Create account</h2>
          <p className="hero-sub">Join StudentHub and manage your academic data effortlessly.</p>
        </div>

        <div className="card-right">
          <form onSubmit={submit}>
            <input className="input" name="name" placeholder="Full name" value={form.name} onChange={onChange} />
            <input className="input" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} />
            <input className="input" name="course" placeholder="Course" value={form.course} onChange={onChange} />
            <input className="input" name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} />
            <input className="input" name="confirm" type="password" placeholder="Confirm password" value={form.confirm} onChange={onChange} />
            <button className="btn" type="submit">Register</button>
            {err && <div style={{ color: "#ff6b6b", marginTop: 10 }}>{err}</div>}
            <div className="hint">Already a member? <Link className="link" to="/login">Sign in</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
}

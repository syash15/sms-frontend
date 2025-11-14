import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Login(){
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [err,setErr] = useState(null);
  const nav = useNavigate();

  const submit = async (e)=>{
    e.preventDefault();
    setErr(null);
    try {
      const res = await api.post("/auth/login", { username, password });
      localStorage.setItem("token", res.data.token);
      nav("/dashboard");
    } catch (e) {
      setErr(e.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="center-screen">
      <div className="card">
        <div className="card-left">
          <h2 className="hero-title">Welcome back 👋</h2>
          <p className="hero-sub">Sign in to access your dashboard, check attendance, and view results.</p>
          <div style={{marginTop:18}}>
            <div style={{padding:12,background:"rgba(255,255,255,0.02)",borderRadius:10}}>Tip: Use test user for demo</div>
          </div>
        </div>

        <div className="card-right">
          <form onSubmit={submit}>
            <input className="input" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
            <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            <button className="btn" type="submit">Sign in</button>
            {err && <div style={{color:"#ff6b6b",marginTop:10}}>{err}</div>}
            <div className="hint">New? <Link className="link" to="/register">Create an account</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
}

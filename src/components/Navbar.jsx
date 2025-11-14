import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <header className="navbar app" role="banner">
      <div className="brand">
        <div className="logo">SMS</div>
        <div>
          <h1>StudentHub</h1>
          <div style={{fontSize:12,color:"var(--muted)"}}>Manage students — fast</div>
        </div>
      </div>

      <nav className="nav-links" role="navigation" aria-label="Main">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/results">Results</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

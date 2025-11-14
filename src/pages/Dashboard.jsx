import React, {useEffect, useState} from "react";
import api from "../services/api";

export default function Dashboard(){
  const [me,setMe] = useState(null);
  useEffect(()=>{
    api.get("/students/me").then(r=>setMe(r.data)).catch(()=>setMe(null));
  },[]);
  return (
    <div className="app">
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
        <h2>Welcome{me ? `, ${me.name}` : ""}</h2>
        <div className="hint">Your dashboard gives a quick snapshot of attendance and results</div>
      </div>

      <div className="grid" style={{marginTop:18}}>
        <div className="card-sm">
          <div style={{color:"var(--muted)",fontSize:13}}>Attendance</div>
          <div className="stat">92%</div>
        </div>
        <div className="card-sm">
          <div style={{color:"var(--muted)",fontSize:13}}>Subjects</div>
          <div className="stat">6</div>
        </div>
        <div className="card-sm">
          <div style={{color:"var(--muted)",fontSize:13}}>GPA</div>
          <div className="stat">3.6</div>
        </div>
      </div>
    </div>
  );
}

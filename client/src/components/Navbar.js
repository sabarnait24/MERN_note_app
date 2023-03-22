// import { Button } from "@mui/material";
import React from "react";
import {  useNavigate } from "react-router-dom";

function Navbar() {
    const navigate=useNavigate();
  const handleLogout=()=>{
      localStorage.clear("token");
      navigate('/');
  }
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-end">
        <div className="">
          <button type="submit" className="btn btn-warning" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

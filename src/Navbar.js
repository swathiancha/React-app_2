import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  return (
    <div className="Link">
      <ul>
        <Link to='/' style={{color:"blue",textDecoration:"none"}}><li>Home</li></Link>
        <Link to='/Editorial'style={{color:"blue",textDecoration:"none"}}><li>Editorial Board</li></Link>
        <Link to='/Submit'style={{color:"blue",textDecoration:"none"}}><li>Submit paper</li></Link>
        <Link to='/Published'style={{color:"blue",textDecoration:"none"}}><li>Published Issue</li></Link>
        <Link to='/Author'style={{color:"blue",textDecoration:"none"}}><li>Author Guideline</li></Link>

      </ul>
    </div>
  );
};

export default Navbar;

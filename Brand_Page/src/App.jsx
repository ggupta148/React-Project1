import React from "react";
import './App.css';
const App=()=>{
  return(
    <div>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>        
        <ul className="nav_items">
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>

      </nav>
    </div>
  )
};
export default App;
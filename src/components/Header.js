import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate =useNavigate()
  const [text, setText] = useState("");

 const componentSearchHandler=()=>{
  const searchedComponent=text.toLowerCase()
  navigate(`/${searchedComponent}`)
 }
  return (
    <div>
      <div className="nav-heading">
        <h1>Neog's Component Library</h1>
        <div className="search-container">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="search your component here" />
         <button className="search-btn"onClick={componentSearchHandler}>Search</button>
        </div>
        <div className="nav-container">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/components">
            Components
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import Header from "../components/Header";
export default function Components() {
  return (
    <div>
        <Header/>
    <div className="component-container">
        
      <h2 className="component-heading">All Components</h2>
      <div className="component-links">
        <button className="component-btn">
          <Link className="link" to="/avatar">Avatar</Link>
        </button>
        <button className="component-btn">
          {" "}
          <Link  className="link"to="/alert">Alert</Link>
        </button>
        <button className="component-btn">
          <Link className="link"to="/badge">Badge</Link>
        </button>
        <button className="component-btn">
          {" "}
          <Link className="link"to="/button">Button</Link>
        </button>
        <button className="component-btn">
          {" "}
          <Link className="link" to="/card">Card</Link>
        </button>
        <button className="component-btn">
          <Link className="link"to="/heading">Heading</Link>
        </button>
        <button className="component-btn">
          <Link className="link"to="/text">Text</Link>
        </button>
        <button className="component-btn">
          {" "}
          <Link className="link" to="/image">Image</Link>
        </button>
      </div>
    </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="nav-heading">
        <h1>NEOG'S COMPONENT LIBRARY</h1>
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

import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
     <Header/>
      <div className="home-container">
        <h1>Your Unique Component Library</h1>
        <p className="home-para">
          A collection of innovative components for modern web develpoment
        </p>
        <div className="home-btn">
        <button className="start-btn">
          <Link  className="start-link"to="/components">Get started</Link>
          
        </button>
        </div>
      </div>
    </div>
  );
}

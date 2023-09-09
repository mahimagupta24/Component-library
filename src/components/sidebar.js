import { Link } from "react-router-dom";

export default function SideBar(){
    return <div className="sidebar">
        <ul className="sidebar-list">
        <p className="sidebar-heading">Components</p>
        <li className="p1"><Link className="sidebar-link" to="/alert">Alert</Link></li>
        <li className="p1"><Link className="sidebar-link"to="/avatar">Avatar</Link></li>
        <li className="p1"><Link className="sidebar-link"to="/badge">Badge</Link></li>
        <li className="p1"><Link className="sidebar-link"to="/button">Button</Link></li>
        <li className="p1"><Link className="sidebar-link"to="/card">Card</Link></li>
        <li className="p1"><Link className="sidebar-link"to="/heading">Heading</Link></li>
        <li className="p1"><Link className="sidebar-link"to="/image">Image</Link></li>
        <li className="p1"><Link className="sidebar-link"to="/text">Text</Link></li>
        

        </ul>
    </div>
}
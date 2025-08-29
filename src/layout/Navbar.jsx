// src/components/Navbar.jsx
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"> MyApp </Link>

      <div className="navbar__nav">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

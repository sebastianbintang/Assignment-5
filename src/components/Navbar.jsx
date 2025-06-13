import React from "react";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-blue-600 font-bold border-b-2 border-blue-600 px-2"
    : "text-gray-700 hover:text-blue-600 px-2";

const Navbar = () => (
  <nav className="flex gap-6 p-4 bg-gray-100 justify-center">
    <NavLink to="/" className={navLinkClass} end>
      Home
    </NavLink>
    <NavLink to="/clubs" className={navLinkClass}>
      Clubs
    </NavLink>
    <NavLink to="/about" className={navLinkClass}>
      About
    </NavLink>
  </nav>
);

export default Navbar;
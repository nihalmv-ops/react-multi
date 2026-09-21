import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-700 hover:bg-blue-100"
    }`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold text-blue-600"
          >
            ReactApp
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>

            <NavLink to="/users" className={linkStyle}>
              Users
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-slate-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 border-t pt-4">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={linkStyle}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={linkStyle}
            >
              About
            </NavLink>

            <NavLink
              to="/users"
              onClick={closeMenu}
              className={linkStyle}
            >
              Users
            </NavLink>

          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
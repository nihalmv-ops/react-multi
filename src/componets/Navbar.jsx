import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm flex items-center">
      <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 font-bold text-base">
            R
          </span>
          ReactApp
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
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
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{isMenuOpen ? "✕" : "☰"}</span>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-6 py-5 space-y-2 md:hidden">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xl text-base font-medium transition ${
                isActive ? "bg-blue-600 text-white shadow-sm" : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xl text-base font-medium transition ${
                isActive ? "bg-blue-600 text-white shadow-sm" : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/users"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xl text-base font-medium transition ${
                isActive ? "bg-blue-600 text-white shadow-sm" : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            Users
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
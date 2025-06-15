
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import "../styles/navbar.scss"; // Assuming this path is correct for your SCSS styles
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Initialize isLoggedIn state based on whether a token exists in localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    // Check localStorage for a token on component mount
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

   
    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem("token");
      setIsLoggedIn(!!updatedToken); // Convert truthy/falsy to boolean
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // Empty dependency array means this runs once on mount

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    setIsLoggedIn(false); // Update local state
    setMenuOpen(false); // Close the mobile menu on logout
    navigate("/login"); // Redirect to the login page or home page
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>MyBlog</Link> {/* Use Link for logo */}

      {/* Hamburger menu toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰ 
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        {/* <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li> */}
 <li><Link to="/my-posts" onClick={() => setMenuOpen(false)}>MyPost</Link></li>
        {user   ? (
          <>
            <li><Link to="/my-account" onClick={() => setMenuOpen(false)}>My Account</Link></li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

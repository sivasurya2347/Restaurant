import React, { useState } from 'react';
import './NavBar.css';

const NavBar = ({ username, onLogout, onSearch }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="/home">Home</a>
        <input type="text" placeholder="Search Restaurants" className="search-bar" onChange={(e) => onSearch(e.target.value)} />
        <div className="user-logo" onClick={toggleDropdown}>
          {username || 'User'} {/* Display username or 'User' if not logged in */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z"/>
          </svg>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={onLogout} className="dropdown-item">Logout</button>
              <button onClick={toggleDropdown} className="dropdown-item">Close</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

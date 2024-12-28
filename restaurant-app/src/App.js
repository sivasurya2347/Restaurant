import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './build/NavBar';
import RestaurantBox from './build/RestaurantBox';
import restaurantData from './constants/Restaurantdata';
import FoodDescriptionPage from './build/FoodDescriptionPage'; // Import the FoodDescriptionPage

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(''); // Store the username after login
  const [filteredData, setFilteredData] = useState(restaurantData);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle login logic
  const handleLogin = (user) => {
    setIsAuthenticated(true); // Mark the user as authenticated
    setUsername(user); // Store the username
  };

  // Handle logout logic
  const handleLogout = () => {
    setIsAuthenticated(false); // Log the user out
    setUsername(''); // Clear the username
  };

  // Search logic for filtering restaurants
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = restaurantData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Router>
      <div className="app">
        {/* Render NavBar only on Home Page */}
        {isAuthenticated && <NavBar username={username} onSearch={handleSearch} onLogout={handleLogout} />}

        <Routes>
          {/* Protected route for Home Page */}
          <Route
            path="/home"
            element={isAuthenticated ? (
              <div className="restaurant-list">
                {filteredData.length > 0 ? (
                  filteredData.map((restaurant, index) => (
                    <RestaurantBox
                      key={index}
                      name={restaurant.name}
                      rating={restaurant.rating}
                      location={restaurant.location}
                      image={restaurant.image}
                    />
                  ))
                ) : (
                  <p>No restaurants found.</p>
                )}
              </div>
            ) : (
              <Navigate to="/" /> // Redirect to the login page if not authenticated
            )}
          />

          {/* Route for FoodDescriptionPage (Login Page) */}
          <Route
            path="/"
            element={!isAuthenticated ? (
              <FoodDescriptionPage onLogin={handleLogin} /> // Render login page if not authenticated
            ) : (
              <Navigate to="/home" /> // Redirect to home page if already logged in
            )}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

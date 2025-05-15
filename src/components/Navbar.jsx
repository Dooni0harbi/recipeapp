import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
      <Link className="navbar-brand" to="/recipes">Recipes Star</Link>
      <div className="ml-auto">
        <Link className="nav-link d-inline" to="/home">Home</Link>
        <Link className="nav-link d-inline" to="/recipes">Recipes</Link>
        <button onClick={handleLogout} className="btn btn-danger ml-3">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;

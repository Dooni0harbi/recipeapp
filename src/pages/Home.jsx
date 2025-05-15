import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-5 shadow-sm text-center">
        <h1 className="mb-4">
          Welcome to <span className="text-primary">Recipes Star</span>
        </h1>
        <p className="mb-4">Discover and share your favorite recipes!</p>
        <div>
          <Link className="btn btn-primary mx-2" to="/">Login</Link>
          <Link className="btn btn-secondary mx-2" to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [input, setInput] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === input.username && storedUser.password === input.password) {
      localStorage.setItem('token', 'login_success');
      navigate('/recipes');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
      <div className="card shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-header bg-secondary text-white text-center">
          <h2 className="mb-0">Login</h2>
        </div>
        <div className="card-body bg-white p-4">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                className="form-control"
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                className="form-control"
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>
          <p className="mt-3 text-center">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
  );
};

export default Login;

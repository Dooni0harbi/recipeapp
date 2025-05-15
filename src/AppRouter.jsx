import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Recipes from './pages/Recipes';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails'; // Import RecipeDetails
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} /> {/* Ensure RecipeDetails is here */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

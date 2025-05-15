import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeDetails = () => {
  const { state } = useLocation();  // Get the state from the Link in RecipeCard
  const navigate = useNavigate();

  if (!state || !state.recipe) {
    return (
      <div className="container mt-5">
        <h3>Recipe not found.</h3>
        <button className="btn btn-secondary mt-3" onClick={() => navigate('/recipes')}>
          Back to Recipes
        </button>
      </div>
    );
  }

  const { recipe } = state;  // Destructure recipe from state

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-3">{recipe.name}</h2>
      <img
        src={recipe.thumbnail_url}
        alt={recipe.name}
        className="img-fluid mb-4"
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
      <p><strong>Prep Time:</strong> {recipe.total_time_minutes ? `${recipe.total_time_minutes} min` : 'N/A'}</p>
      {recipe.description && <p>{recipe.description}</p>}
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/recipes')}>
        Back to Recipes
      </button>
    </div>
  );
};

export default RecipeDetails;

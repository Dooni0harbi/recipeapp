import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="col d-flex justify-content-center">
      <div className="card h-100 shadow-sm">
        <img
          src={recipe.thumbnail_url}
          className="card-img-top"
          alt={recipe.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title text-center">{recipe.name}</h5>
          <Link to={`/recipes/${recipe.id}`} state={{ recipe }} className="btn btn-primary mt-auto">
            Read Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

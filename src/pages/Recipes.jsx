import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecipes } from '../services/api';
import RecipeCard from '../components/RecipeCard';
import 'bootstrap/dist/css/bootstrap.min.css';


const Recipes = () => {
  const [recipes, setRecipes] = useState([]); // Store all recipes
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Store filtered recipes based on search and meal category
  const [search, setSearch] = useState(''); // Store the search query
  const [mealCategory, setMealCategory] = useState(''); // Store selected meal category
  const [mealCategories, setMealCategories] = useState([]); // Store available meal categories (from API)
  const navigate = useNavigate();

  // Check if the user is logged in on page load
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    } else {
      fetchRecipes();
    }
  }, []);

  // Fetch recipes from API
  const fetchRecipes = async () => {
    const data = await getRecipes();
    console.log(data)
    setRecipes(data);
    setFilteredRecipes(data); // Initially set filtered recipes as all recipes

    // Extract meal categories from the recipes (assuming the API provides meal categories in each recipe)
    const categories = [
      ...new Set(data.map((recipe) => recipe.mealType).filter(Boolean)), // Collect unique meal categories
    ];
    setMealCategories(categories); // Set available meal categories
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle meal category dropdown change
  const handleMealCategoryChange = (e) => {
    setMealCategory(e.target.value);
  };

  // Filter recipes based on search query and meal category
  useEffect(() => {
    let results = recipes;

    // Filter by search query
    if (search) {
      results = results.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by meal category if selected
    if (mealCategory) {
      results = results.filter((recipe) => recipe.mealType === mealCategory);
    }

    setFilteredRecipes(results); // Update filtered recipes
  }, [search, mealCategory, recipes]); // Re-run filtering logic whenever search, mealCategory, or recipes changes

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Under 30 Minute Recipes</h2>

      {/* Search input field */}
      <div className="mb-4 d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by recipe name"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      {/* Meal Category Dropdown */}
      <div className="mb-4 d-flex justify-content-center">
        <select
          className="form-control w-50"
          value={mealCategory}
          onChange={handleMealCategoryChange}
        >
          <option value="">Select Meal Category</option>
          {mealCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display filtered recipes */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredRecipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="col">
              <RecipeCard recipe={recipe} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recipes;

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export const getRecipes = async () => {
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '20',
      tags: 'under_30_minutes',
    },
    headers: {
      'x-rapidapi-key': '4c818d98b6msh66d9957f8075168p11c17ajsn522d1783608d',
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.results; // Ensure we're returning 'results' array
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

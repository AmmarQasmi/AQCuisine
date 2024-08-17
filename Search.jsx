import React from 'react'
import { useState } from 'react';

function Search() {
    const [query, setQuery] = useState('');
    const [recipe, setRecipes] = useState([]);

    const apiKey = 'e4ddb2ea5e7043c381f63a0400b4262d'; //spoonacular api

    const fetchRecipes = async () => {
        if (query) {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`
            );
            const data = await response.json();
            setRecipes(data.results); // Store the fetched recipes in state
        }
    };

    return (
        <div className="min-h-screen bg-gray-500 flex justify-center items-center">
            <section className='bg-gray-500 text-white text-center border-solid'>
                <div className='flex justify-center container mx-auto p-8'>
                    <input
                        type="search"
                        placeholder='Kya khaayega?'
                        className='border-spacing-3 bg-slate-800 text-white p-4 w-96 h-20 rounded-lg transition-all duration-300 sm:w-64 md:w-80 lg:w-96 sm:h-15 md:h-30 lg:h-20  hover:bg-gray-700 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        onClick={fetchRecipes} // Fetch recipes when the button is clicked
                        className="ml-4 p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                    >
                        Search
                    </button>
                </div>
            </section>

            {/* Display fetched recipes */}
            <section className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {recipe.map((recipe) => (
                        <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                                {/* <p className="text-gray-700">{recipe.id}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    )
}

export default Search
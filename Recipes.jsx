import React, { useState } from 'react';

function Recipes() {
    const [favorites, setFavorites] = useState([]);
    const [input, setInput] = useState('');

    const addFavorite = () => {
        if (input.trim()) {
            setFavorites([...favorites, input]);
            setInput('');
        }
    };

    return (
        <div className="min-h-screen bg-gray-500 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Favorite Recipes</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    {favorites.map((recipe, index) => (
                        <li key={index} className="mb-2">{recipe}</li>
                    ))}
                </ul>
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Enter Your Favorite Recipe"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button
                        onClick={addFavorite}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Recipes;

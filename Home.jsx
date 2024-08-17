import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="bg-orange-500 text-white text-center py-12">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-4 mt-20">Welcome to AQCuisine</h1>
                    <p className="text-lg mb-8 mt-6">Your go-to destination for delicious recipes and culinary inspiration.</p>
                    <Link
                        to="/search"
                        className="bg-white text-orange-500 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200"
                    >
                        Find Recipes
                    </Link>
                </div>
            </section>

            {/* Featured Recipes */}
            <section className="container mx-auto py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Recipes</h2><br />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Recipe Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110 ">
                        <a href="https://www.budgetbytes.com/category/recipes/pasta/"><img src="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl.jpg" alt="Recipe 1" className="w-full h-48 object-cover cursor-pointer" /> </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Delicious Pasta</h3>
                            <p className="text-gray-700">A delightful pasta dish that's easy to prepare and incredibly tasty.</p>
                        </div>
                    </div>
                    {/* Recipe Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110">
                        <a href="https://www.dishoom.com/journal/dishooms-lamb-raan-recipe/"><img src="https://kfoods.com/images1/newrecipeicon/lamb-raan-roast_7122.jpg" alt="Recipe 2" className="w-full h-48 object-cover cursor-pointer" /> </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Lamb Raan Roast</h3>
                            <p className="text-gray-700">Succulent lamb leg, marinated in aromatihttps://www.dishoom.com/journal/dishooms-lamb-raan-recipe/c spices and herbs, slow-cooked to perfection with a crispy, flavorful crust.</p>
                        </div>
                    </div>
                    {/* Recipe Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110">
                        <a href="https://www.recipetineats.com/grilled-cheese-sandwich/"><img src="https://www.vegrecipesofindia.com/wp-content/uploads/2014/01/grilled-sandwich-4.jpg" alt="Recipe 3" className="w-full h-48 object-cover cursor-pointer" /></a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Grilled Sandwich</h3>
                            <p className="text-gray-700">Juicy grilled chicken with a flavorful marinade, perfect for summer.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110">
                        <a href="https://www.indianhealthyrecipes.com/chicken-biryani-recipe/"> <img src="https://pixahive.com/wp-content/uploads/2020/10/Spicy-Mutton-biryani-143379-pixahive.jpg" alt="Recipe 4" className="w-full h-48 object-cover cursor-pointer" /> </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Biryani</h3>
                            <p className="text-gray-700">A fragrant, spiced rice dish with tender, marinated meat and aromatic herbs. Each bite delivers a rich blend of saffron, cardamom, and fried onions, creating a delectable fusion of flavors.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110">
                        <a href="https://recipe52.com/paneer-reshmi-handi-recipe-with-photos/"><img src="https://foodfusion.com/wp-content/uploads/2022/10/Grab-03.jpg?v=1667816073" alt="Recipe 5" className="w-full h-48 object-cover cursor-pointer" /></a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Paneer Reshmi Handi</h3>
                            <p className="text-gray-700">Creamy, luxurious paneer cooked in a smooth, cashew-based sauce with subtle spices. Every bite is a rich, indulgent experience with a perfect balance of sweetness and spice.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110">
                        <a href="https://www.nutritionaltherapyforibd.org/recipes/chicken-shawarma?gad_source=1&gclid=CjwKCAjw8fu1BhBsEiwAwDrsjCQpkS_v9GqE_Ac5cc0hKErxf5txRMWb4AtbrwKG5vS9FR_oaR3GLhoC0IAQAvD_BwE"> <img src="https://recipe30.com/wp-content/uploads/2022/07/Shawarma.jpg" alt="Recipe 6" className="w-full h-48 object-cover cursor-pointer" /></a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Shawarma</h3>
                            <p className="text-gray-700">Juicy, spiced meat wrapped in warm flatbread, topped with crisp veggies and tangy sauce. Each bite offers a delightful blend of savory, spicy, and creamy flavors.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-gray-200 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">About AQCuisine</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        At AQCuisine, we believe that cooking should be enjoyable and accessible. Our website offers a wide range of recipes,
                        cooking tips, and inspiration to help you make delicious meals at home.
                    </p>
                    <Link
                        to="/recipe-list"
                        className="bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600"
                    >
                        Recipe Lists
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;

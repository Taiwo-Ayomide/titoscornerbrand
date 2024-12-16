import React, { useEffect, useState } from "react";
import axios from 'axios';
import BackToTop from "./BackToTop";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? `${text.slice(0, 100)}...` : text}
            <span
                onClick={toggleReadMore}
                className="text-green-500 cursor-pointer"
            >
                {isReadMore ? " read more" : " show less"}
            </span>
        </p>
    );
};

const Food = () => {
    const [recipes, setRecipes] = useState([]);  // Store fetched recipes
    const [currentPage, setCurrentPage] = useState(1);  // Track current page
    const [totalPages, setTotalPages] = useState(1);  // Total number of pages
    const [loading, setLoading] = useState(false);  // Loading state

    const fetchRecipes = async (page) => {
        setLoading(true);
        try {
            const response = await axios.get('https://titoscornerwebservice.onrender.com/api/recipe/', {
                params: { page, limit: 6 } // Send pagination params to the backend
            });
            const data = response.data;

            if (data && Array.isArray(data.recipes)) {
                setRecipes(data.recipes);  // Set recipes for current page
                setTotalPages(data.totalPages);  // Set total pages for pagination
                setCurrentPage(data.currentPage);  // Set current page from API response
            } else {
                console.error('Expected an array of recipes but got:', data);
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes(currentPage);  // Fetch recipes when the page changes
    }, [currentPage]); // Fetch recipes whenever the page changes

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);  // Go to next page
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);  // Go to previous page
        }
    };

    return (
        <section className="pt-24 flex flex-wrap justify-center overflow-hidden">
            <div>
                <h1 className="font-semibold text-2xl">RECIPE</h1>
            </div>
            {loading ? (
                <div>Loading...</div>  // Display loading state
            ) : (
                recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        id="back"
                        className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-5/12 shadow-xl m-3 p-5"
                        data-aos="flip-up"
                        data-aos-duration="3000"
                    >
                        <div className="mx-auto max-w-7xl">
                            <div className="p-5">
                                <article className="flex flex-col items-start justify-between">
                                    <div className="relative">
                                        <img
                                            src={recipe.imageUrl}
                                            alt={recipe.name}
                                            loading="lazy"
                                            className="w-full h-96 object-cover rounded-lg"
                                            style={{ width: '32rem', height: '32rem' }}
                                        />
                                        <h3 className="mt-3 text-lg font-bold uppercase text-white leading-6 text-gray-900 hover:text-gray-600">
                                            {recipe.name}
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-yellow-500 text-justify">
                                            {recipe.backgroundstory}
                                        </p>
                                        <div className="mt-8">
                                            <h1 className="uppercase font-bold text-white">Ingredients</h1>
                                            <ul className="font-semibold text-yellow-500">
                                                {/* Check if ingredients is an array */}
                                                {Array.isArray(recipe.ingredients)
                                                    ? recipe.ingredients.map((ingredient, index) => (
                                                        <li key={index}>{ingredient}</li>
                                                    ))
                                                    : typeof recipe.ingredients === 'string'
                                                    ? <li>{recipe.ingredients}</li>  // If ingredients is a string, render it as a single item
                                                    : <li>No ingredients available</li>  // Handle any other unexpected types (like null or object)
                                                }
                                            </ul>
                                        </div>
                                        <div className="mt-8">
                                            <h1 className="uppercase font-bold text-white">Steps</h1>
                                            <ReadMore className="mt-2 text-sm leading-6 text-justify text-yellow-500">
                                                {recipe.steps}
                                            </ReadMore>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                ))
            )}
            <div className="flex justify-between items-center w-full mt-8">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="bg-gray-200 px-4 py-2 rounded"
                >
                    Previous
                </button>
                <span className="text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="bg-gray-200 px-4 py-2 rounded"
                >
                    Next
                </button>
            </div>
            <BackToTop />
        </section>
    );
};

export default Food;

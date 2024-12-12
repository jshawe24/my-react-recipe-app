import React, { useState } from 'react';

const AddRecipe = ({ darkMode }) => {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState(''); // Added state for slug
    const [ingredients, setIngredients] = useState([{ product: '', amount: '', unit: '' }]);
    const [steps, setSteps] = useState([{ step: '', imageUrl: '' }]);
    const [cookingTime, setCookingTime] = useState('');
    const [servings, setServings] = useState(1);
    const [message, setMessage] = useState('');

    const handleIngredientChange = (index, event) => {
        const values = [...ingredients];
        values[index][event.target.name] = event.target.value;
        setIngredients(values);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { product: '', amount: '', unit: '' }]);
    };

    const handleStepChange = (index, event) => {
        const values = [...steps];
        values[index][event.target.name] = event.target.value;
        setSteps(values);
    };

    const handleAddStep = () => {
        setSteps([...steps, { step: '', imageUrl: '' }]);
    };

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newRecipe = {
            id: `recipe-${Date.now()}`, // Unique id
            name, // Directly pass name
            slug: name.toLowerCase().replace(/\s+/g, '-'), // Generate slug based on name
            image: [], // Use empty array if there are no images
            steps: steps.map(step => ({
                step: step.step,
                image: step.imageUrl ? [{ dataUrl: step.imageUrl, type: 'external' }] : []
            })),
            servings: servings,
            cookingTime: cookingTime,
            description: "A simple and delicious carrot soup recipe.", // Static for now, can be updated as needed
            ingredients: ingredients.map(ingredient => ({
                product: ingredient.product,
                amount: Number(ingredient.amount),
                unit: ingredient.unit
            })),
        };

        try {
            const response = await fetch('https://api.flotiq.com/api/v1/content/recipe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': process.env.REACT_APP_API_KEY
                },
                body: JSON.stringify(newRecipe)
            });

            // Check if the response is not OK
            if (!response.ok) {
                const errorData = await response.json(); // Parse the JSON response
    
                // Check if errorData is an object
                if (errorData && typeof errorData === 'object') {
                    // Loop through the keys of the error object
                    let errorMessage = "Error: ";
                    for (const [key, messages] of Object.entries(errorData)) {
                        if (Array.isArray(messages) && messages.length > 0) {
                            // Prepend the field name (e.g., "Slug") to the first message
                            errorMessage += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${messages[0]} `;
                        }
                    }
                    setErrorMessage(errorMessage.trim()); // Set the composed error message
                } else {
                    setErrorMessage("An unspecified error occurred.");
                }
                return; // Exit the function early if there's an error
            }

        const data = await response.json(); // Parse the successful response
        alert(`Recipe added! ID: ${data.id}`);

        setErrorMessage(""); // Reset any previous error messages


        } catch (error) {
            setMessage(`Error: ${error.message}`);

           // If there is a network error or other unexpected error
            setErrorMessage(`Error: ${error.message}`);
            console.error("Fetch Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`${darkMode ? 'text-white' : 'text-black'}`}>
            <div className={`ast ${darkMode ? 'ajt' : 'aml'}`} style={{ paddingTop: '2em' }}>
                <div className="gh uo asf dmr">
                    <div className="gh uj dcb">
                        <h2 className={`aee awq axr axz cqp ${darkMode ? 'bbl' : 'ayx'}`}>Add New Recipe</h2>
                        <p className="kt axc ayr">Our recipes are made by the finest chefs, to deliver greatness to every meal.</p>
                    </div>
    
                    <div className="mb-4">
                        <label className="block mb-1">Recipe Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className={`border rounded p-2 w-full ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-black'}`}
                            required
                        />
                    </div>
    
                    <div className="mb-4">
                        <label className="block mb-1">Ingredients:</label>
                        {ingredients.map((ingredient, index) => (
                            <div key={index} className="flex mb-2">
                                <input
                                    type="text"
                                    name="product"
                                    value={ingredient.product}
                                    onChange={event => handleIngredientChange(index, event)}
                                    className={`border rounded p-2 w-1/3 mr-2 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-black'}`}
                                    placeholder="Ingredient"
                                    required
                                />
    
                                <input
                                    type="number"
                                    name="amount"
                                    value={ingredient.amount}
                                    onChange={event => handleIngredientChange(index, event)}
                                    className={`border rounded p-2 w-1/3 mr-2 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-black'}`}
                                    placeholder="Amount"
                                    required
                                />
    
                                <select
                                    name="unit"
                                    value={ingredient.unit}
                                    onChange={event => handleIngredientChange(index, event)}
                                    className={`border rounded p-2 w-1/3 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-black'}`}
                                    required
                                >
                                    <option value="">Select unit</option>
                                    <option value="pcs">pcs</option>
                                    <option value="g">g</option>
                                    <option value="kg">kg</option>
                                    <option value="cups">cups</option>
                                    <option value="tablespoon">tablespoon</option>
                                    <option value="teaspoon">teaspoon</option>
                                </select>
                            </div>
                        ))}
    
                        <button
                            type="button"
                            onClick={handleAddIngredient}
                            className={`bg-blue-500 rounded-md px-4 py-2 shadow-md 
                                hover:bg-blue-600 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-blue-400 
                                focus:ring-opacity-50 transition-all 
                                ${darkMode ? 'text-white bg-blue-700 hover:bg-blue-800' : 'text-black'}`}
                        >
                            Add Ingredient
                        </button>
                    </div>
    
                    <div className="mb-4">
                        <label className="block mb-1">Steps:</label>
                        {steps.map((step, index) => (
                            <div key={index} className="flex mb-2">
                                <textarea
                                    name="step"
                                    value={step.step}
                                    onChange={event => handleStepChange(index, event)}
                                    className={`border rounded p-2 w-2/3 mr-2 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-black'}`}
                                    placeholder="Step description"
                                    required
                                />
    
                                <input
                                    type="text"
                                    name="imageUrl"
                                    value={step.imageUrl}
                                    onChange={event => handleStepChange(index, event)}
                                    className={`border rounded p-2 w-1/3 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-black'}`}
                                    placeholder="Image URL (optional)"
                                />
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={handleAddStep}
                            className={`bg-blue-500 rounded-md px-4 py-2 shadow-md 
                                hover:bg-blue-600 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-blue-400 
                                focus:ring-opacity-50 transition-all 
                                ${darkMode ? 'text-white bg-blue-700 hover:bg-blue-800' : 'text-black'}`}
                        >
                            Add Step
                        </button>
                    </div>
    
                    <div className="mb-4">
                        <label className="block mb-1">Cooking Time:</label>
                        <input
                            type="text"
                            value={cookingTime}
                            onChange={e => setCookingTime(e.target.value)}
                            className={`border rounded p-2 w-full ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-black'}`}
                            placeholder="e.g. 30 minutes"
                            required
                        />
                    </div>
    
                    <div className="mb-4">
                        <label className="block mb-1">Servings:</label>
                        <input
                            type="number"
                            value={servings}
                            onChange={e => setServings(Number(e.target.value))}
                            className={`border rounded p-2 w-full ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-black'}`}
                            required
                        />
                    </div>

                    <button
                            type="submit"
                            className={`bg-blue-500 rounded-md px-4 py-2 shadow-md 
                                hover:bg-blue-600 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-blue-400 
                                focus:ring-opacity-50 transition-all 
                                ${darkMode ? 'text-white bg-blue-700 hover:bg-blue-800' : 'text-black'}`}
                        >
                            Submit Recipe
                    </button>
    
                    {message && <p className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-red-600'}`}>{message}</p>}
                    {errorMessage && <div className="error mt-4 text-red-600">{errorMessage}</div>}
                </div>
            </div>
            
        </form>
         
    );
    
    
};

export default AddRecipe;

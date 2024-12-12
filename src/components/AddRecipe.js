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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newRecipe = {
            id: `recipe-${Date.now()}`, // Unique id
            name, // Directly pass name
            slug: name.toLowerCase().replace(/\s+/g, '-'), // Generate slug based on name
            image: [], // Use empty array if there are no images
            steps: steps.map(step => ({
                step: step.step,
                image: step.imageUrl ? [{ dataUrl: step.imageUrl, type: 'external' }] : [] // Adjust if needed
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

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const result = await response.json();
            setMessage(`Recipe added successfully: ${result.id}`);
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`}>
            <h2 className="text-lg font-bold">Add New Recipe</h2>

            <div className="mb-4">
                <label className="block mb-1">Recipe Name:</label>
                <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="border rounded p-2 w-full"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1">Ingredients:</label>
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="flex mb-2">
                        <input type="text"
                            name="product"
                            value={ingredient.product}
                            onChange={event => handleIngredientChange(index, event)}
                            className="border rounded p-2 w-1/3 mr-2"
                            placeholder="Ingredient"
                            required
                        />
                        <input type="number"
                            name="amount"
                            value={ingredient.amount}
                            onChange={event => handleIngredientChange(index, event)}
                            className="border rounded p-2 w-1/3 mr-2"
                            placeholder="Amount"
                            required
                        />
                        <select
                            name="unit"
                            value={ingredient.unit}
                            onChange={event => handleIngredientChange(index, event)}
                            className="border rounded p-2 w-1/3"
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
                    className={`bg-blue-500 rounded-md px-4 py-2 shadow-md 
                                hover:bg-blue-600 focus:outline-none 
                                focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 
                                transition-all 
                                ${darkMode ? 'text-white bg-blue-700 hover:bg-blue-800' : 'text-white'}`}>
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
                            className="border rounded p-2 w-2/3 mr-2"
                            placeholder="Step description"
                            required
                        />
                        <input
                            type="text"
                            name="imageUrl"
                            value={step.imageUrl}
                            onChange={event => handleStepChange(index, event)}
                            className="border rounded p-2 w-1/3"
                            placeholder="Image URL (optional)"
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddStep} className="bg-blue-500 text-white rounded p-2">
                    Add Step
                </button>
            </div>

            <div className="mb-4">
                <label className="block mb-1">Cooking Time:</label>
                <input type="text"
                    value={cookingTime}
                    onChange={e => setCookingTime(e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="e.g., 30 minutes"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1">Servings:</label>
                <input type="number"
                    value={servings}
                    onChange={e => setServings(Number(e.target.value))}
                    className="border rounded p-2 w-full"
                    required
                />
            </div>

            <button type="submit" className="bg-green-500 text-white rounded p-2">
                Submit Recipe
            </button>

            {message && <p className={`mt-4 ${darkMode ? 'text-light' : 'text-red-600'}`}>{message}</p>}
        </form>
    );
};

export default AddRecipe;

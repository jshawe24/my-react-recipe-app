import React, { useEffect, useState } from 'react';

// Function to fetch data from the API
const fetchData = async (setLoading, setError) => {
    setLoading(true);
    
    try {
        const response = await fetch('https://api.flotiq.com/api/v1/content/recipe', {
            method: 'GET',
            headers: {
                'X-Auth-Token': process.env.REACT_APP_API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.data; // Adjust this based on the structure of the API response
    } catch (error) {
        setError(error.message);
        return [];
    } finally {
        setLoading(false);
    }
};

const RecipeTable = ({ darkMode }) => {
    const [recipes, setRecipes] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData(setLoading, setError);
            setRecipes(data);
        };

        getData();
    }, []);

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedRecipes = [...recipes].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const filteredRecipes = sortedRecipes.filter(recipe =>
        recipe.ingredients.some(ingredient =>
            ingredient.product.toLowerCase().includes(filter.toLowerCase())
        )
    );

    return (
        <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-4`} style={{ paddingTop: '2em' }}>
            <div className='mb-4'>
                <h2 className={`${darkMode ? 'text-white' : 'text-black'}`}>Search recipes</h2>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                    Search all our recipes for your favorite.
                </p>
                {loading && <div>Loading... Please wait.</div>}
                {error && <div className="text-red-500">Error: {error}</div>}
                <input
                    type="text"
                    placeholder="Filter by ingredient..."
                    className={`mb-4 p-2 border rounded ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200' : 'border-gray-300'}`}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>

            <div className="relative overflow-x-auto">
                <table className={`w-full text-sm text-left ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <thead className={`${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-50 text-gray-700'}`}>
                        <tr>
                            {['name', 'ingredients', 'cookingTime', 'servings'].map((header) => (
                                <th
                                    key={header}
                                    scope="col"
                                    className={`cursor-pointer px-6 py-3 ${darkMode ? 'text-gray-400' : ''}`}
                                    onClick={() => handleSort(header)}
                                >
                                    {header.charAt(0).toUpperCase() + header.slice(1)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map((recipe) => (
                                <tr key={recipe.id} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                                    <td className={`px-6 py-4 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {recipe.name}
                                    </td>
                                    <td className={`px-6 py-4 ${darkMode ? 'text-gray-400' : ''}`}>
                                        {recipe.ingredients.map((ing, index) => (
                                            <div key={index}>{`${ing.product} (${ing.amount} ${ing.unit})`}</div>
                                        ))}
                                    </td>
                                    <td className={`px-6 py-4 ${darkMode ? 'text-gray-400' : ''}`}>
                                        {recipe.cookingTime}
                                    </td>
                                    <td className={`px-6 py-4 ${darkMode ? 'text-gray-400' : ''}`}>
                                        {recipe.servings}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className={`text-center border-b px-6 py-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                                    No recipes found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecipeTable;

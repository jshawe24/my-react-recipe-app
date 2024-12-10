import React from 'react';

const Header = ({ toggleDarkMode, darkMode, setContent }) => {
  return (
    <header className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center">
        <img
          src={darkMode ? `${process.env.PUBLIC_URL}/benjis-recipes-logo-green.png` : `${process.env.PUBLIC_URL}/benjis-recipes-logo.png`}
          alt="Logo"
          className="h-10"
        />
        <nav className="ml-4">
          <ul className={`flex space-x-4 ${darkMode ? 'text-white' : 'text-black'}`}>
            <li onClick={() => setContent("home")} className="cursor-pointer">Home</li>
            <li onClick={() => setContent("searchRecipes")} className="cursor-pointer">Search Recipes</li>
            <li onClick={() => setContent("addRecipe")} className="cursor-pointer">Add New Recipe</li>
            <li onClick={() => setContent("ingredients")} className="cursor-pointer">Ingredients</li>
          </ul>
        </nav>
      </div>
      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}
      >
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;

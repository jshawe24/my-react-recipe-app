import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [content, setContent] = useState("home");

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev); // Toggle state
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} setContent={setContent}/>
      <Body content={content} darkMode={darkMode} />
      <Footer darkMode={darkMode} setContent={setContent} />
    </div>
  );
};

export default App;

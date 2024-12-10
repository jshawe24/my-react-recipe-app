import React from 'react';

const Footer = ({ darkMode, setContent }) => {
    return (
        <footer className={`flex justify-center p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <ul className={`flex space-x-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                <li onClick={() => setContent("policy")} className="cursor-pointer">Policy</li>
                <li onClick={() => setContent("terms")} className="cursor-pointer">Terms and Conditions</li>
                <li onClick={() => setContent("contact")} className="cursor-pointer">Contact Us</li>
            </ul>
        </footer>
    );
};

export default Footer;

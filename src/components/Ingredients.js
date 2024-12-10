// Ingredients.js
import React from 'react';

const Ingredients = ({ darkMode }) => {
  const ingredientList = [
    "Tomatoes",
    "Onion",
    "Garlic",
    "Ground Beef",
    "Chili Powder",
    "Beans",
    "Eggs",
    "Milk",
    "Bread",
  ];

  return (
    <div className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`}>
      <h2 className="text-lg font-bold mb-2">Available Ingredients</h2>
      <ul className="list-disc pl-5">
        {ingredientList.map((ingredient, index) => (
          <li key={index} className="mb-1">{ingredient}</li>
        ))}
      </ul>
    
      <div className="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 className="font-medium text-2xl text-gray-800">Contact Astroship</h2>
        <p className="text-lg leading-relaxed text-slate-500 mt-3">
          Have something to say? We are here to help. Fill up the form or send an email or call the phone.
        </p>
        <div className="mt-5">
          {/* Address */}
          <div className="flex items-center mt-2 space-x-2 text-gray-600">
            <svg width="1em" height="1em" viewBox="0 0 24 24" className="text-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8m0 17.65c-2.13-2-6-6.31-6-9.65a6 6 0 0 1 12 0c0 3.34-3.87 7.66-6 9.65M12 6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2" />
            </svg>
            <span>1734 San Francisco, CA 93063</span>
          </div>
          {/* Email */}
          <div className="flex items-center mt-2 space-x-2 text-gray-600">
            <svg width="1em" height="1em" viewBox="0 0 24 24" className="text-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-.41 2l-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41Z" />
            </svg>
            <a href="mailto:hello@astroshipstarter.com">hello@astroshipstarter.com</a>
          </div>
          {/* Phone */}
          <div className="flex items-center mt-2 space-x-2 text-gray-600">
            <svg width="1em" height="1em" viewBox="0 0 24 24" className="text-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2a12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9m.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11.12 11.12 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.49 14.49 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a13.69 13.69 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z" />
            </svg>
            <a href="tel:+19874587899">+1 (987) 4587 899</a>
          </div>
        </div>
      </div>

      <div>
        <form action="https://api.web3forms.com/submit" method="POST" id="form" className="needs-validation">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input type="checkbox" className="hidden" style={{ display: 'none' }} name="botcheck" />

          <div className="mb-5">
            <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" name="name" />
            <div className="invalid-feedback text-red-400 text-sm mt-1">Please provide your full name.</div>
          </div>

          <div className="mb-5">
            <label htmlFor="email_address" className="sr-only">Email Address</label>
            <input id="email_address" type="email" placeholder="Email Address" name="email" required className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" />
            <div className="invalid-feedback text-red-400 text-sm mt-1">Please provide a valid email address.</div>
          </div>

          <div className="mb-3">
            <textarea name="message" required placeholder="Your Message" className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"></textarea>
            <div className="invalid-feedback text-red-400 text-sm mt-1">Please enter your message.</div>
          </div>

          <button type="submit" className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-6 py-3 bg-black text-white hover:bg-slate-900 border-2 border-transparent">
            Send Message
          </button>

          <div id="result" className="mt-3 text-center"></div>
        </form>
      </div>
    </div>
    
      
    </div>
  );
};

export default Ingredients;

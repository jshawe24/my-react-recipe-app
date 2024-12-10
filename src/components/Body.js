import React from 'react';
import RecipeTable from './RecipeTable'; // Import your RecipeTable
import AddRecipe from './AddRecipe'; // Import your AddRecipe component
import Ingredients from './Ingredients'; // Import your Ingredients component

const Body = ({ content, darkMode }) => {
  return (
    <main className="p-4">
      {content === "home" ? (
        
        <div className={`ast ${darkMode ? 'ajt' : 'aml'}`} style={{ paddingTop: '2em' }}>
        <div class="gh uo asf dmr">
           <div class="gh uj dcb">
              <h2 className={`aee awq axr axz cqp ${darkMode ? 'bbl' : 'ayx'}`}>Our recipes</h2> 
              <p className="kt axc ayr">Our recipes are made by the finest chefs, to deliver greatness to every meal.</p>
           </div>
           <ul role="list" className="gh kg lk uj yu aaz abe cji dcb dgl dho">
              <li>
                 <img alt="" src="https://api.flotiq.com/image/0x0/_media-582ab036-fc57-4565-b497-8011d4d3b7e6.jpg" className="me ua aeg ara"/>
                 <h3 className="kt axc axr axz ayx">Tomato soup</h3>
                 <p className="awx ayr">Winter heart warming tomato soup.</p>
                 <ul role="list" className="kt lg aay">
                    <li>
                       <a href="#" className="ayr bmd">
                          <span class="b">X</span>
                          <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" class="nk">
                             <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"></path>
                          </svg>
                       </a>
                    </li>
                    <li>
                       <a href="#" class="ayr bmd">
                          <span class="b">LinkedIn</span>
                          <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" class="nk">
                             <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" fill-rule="evenodd"></path>
                          </svg>
                       </a>
                    </li>
                 </ul>
              </li>
     
              <li>
                 <img alt="" src="https://api.flotiq.com/image/0x0/_media-a02e5b6c-5f00-4ef3-a218-be7f40836103.png" className="me ua aeg ara"/>
                 <h3 class="kt axc axr axz ayx">Chilli</h3>
                 <p class="awx ayr">A cozy little chilli for the weekend</p>
                 <ul role="list" class="kt lg aay">
                    <li>
                       <a href="#" class="ayr bmd">
                          <span class="b">X</span>
                          <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" class="nk">
                             <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"></path>
                          </svg>
                       </a>
                    </li>
                    <li>
                       <a href="#" class="ayr bmd">
                          <span class="b">LinkedIn</span>
                          <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" class="nk">
                             <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" fill-rule="evenodd"></path>
                          </svg>
                       </a>
                    </li>
                 </ul>
              </li>
              <li>
                 <img alt="" src="https://api.flotiq.com/image/0x0/_media-22df1f8d-1fa2-47e4-ba88-6ef440c3f3f7.jpg" className="me ua aeg ara"/>
                 <h3 class="kt axc axr axz ayx">Scrambled eggs</h3>
                 <p class="awx ayr">Protein packed start to the day.</p>
                 <ul role="list" class="kt lg aay">
                    <li>
                       <a href="#" class="ayr bmd">
                          <span class="b">X</span>
                          <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" class="nk">
                             <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"></path>
                          </svg>
                       </a>
                    </li>
                    <li>
                       <a href="#" class="ayr bmd">
                          <span class="b">LinkedIn</span>
                          <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" class="nk">
                             <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" fill-rule="evenodd"></path>
                          </svg>
                       </a>
                    </li>
                 </ul>
              </li>
           </ul>
        </div>
     </div>



      ) : content === "searchRecipes" ? (
        <RecipeTable darkMode={darkMode} />
      ) : content === "addRecipe" ? (
        <AddRecipe darkMode={darkMode} />
      ) : content === "ingredients" ? (
        <Ingredients darkMode={darkMode} />
      ) : (
        <div>No Content Available</div> // Fallback or default content
      )}
    </main>
  );
};

export default Body;

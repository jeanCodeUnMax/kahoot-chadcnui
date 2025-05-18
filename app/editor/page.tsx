'use client';




// import { ChevronUp, ChevronDown, Plus, Minus, Save, Upload } from 'flowbite';
import { FaChevronUp, FaChevronDown, FaSave, FaUpload, FaUser } from 'react-icons/fa';


  

export default function EditorPage() {

 



  return (
  <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        {/* Navbar */}
        <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
          <div className="flex flex-wrap justify-between items-center">
            {/* Hamburger button for mobile */}
            <button
             
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>

            {/* User profile button */}
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
            <span className="sr-only">Open user menu</span>
            <FaUser size={16} />
            </button>
            
          </div>
        </nav>

        <div className="flex pt-16">
          {/* Left Sidebar - Liste */}
        <aside
          className={"fixed top-16 left-0 z-40 w-64 h-screen transition-transform duration-300"}>
          <div className="overflow-y-auto h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            {/* En-tête avec titre */}
            <div className="bg-blue-600 text-white p-4">
              <h2 className="text-xl font-bold">Gestion des Quizz</h2>
            </div>
            
            {/* Section des actions principales */}
            <div className="p-4 border-b border-gray-300">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center"
                  
                >
                  <FaUpload size={16} className="mr-2" />
                  Charger
                </button>
                <button 
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center justify-center"
                 
                >
                  <FaSave size={16} className="mr-2" />
                  Créer
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                  Nom du quiz
                </label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
               
                  placeholder="Entrez un nom pour votre quiz"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                  Thème
                </label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                
                >
                  <option value="">Sélectionnez un thème</option>
                 
                </select>
              </div>
            </div>
            
            {/* Navigation des questions */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-700">
              <button 
                className="p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
             
              >
                <FaChevronUp size={20} className="dark:text-white" />
              </button>
              <span className="font-medium dark:text-white">
              
              </span>
              <button 
                className="p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
             
              >
                <FaChevronDown size={20} className="dark:text-white" />
              </button>
            </div>
            
            {/* Liste des questions */}
            <div className="flex-1 overflow-y-auto p-4">
             
            </div>
          </div>
        </aside>



            
        </div>
      </div>
    </>
  );
}




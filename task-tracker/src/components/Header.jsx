import React from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../store/taskContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTasks();

  return (
    <header className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">Task Tracker</h1>
        </Link>
        
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link 
                  to="/" 
                  className="hover:underline px-3 py-2 rounded hover:bg-opacity-80 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/stats" 
                  className="hover:underline px-3 py-2 rounded hover:bg-opacity-80 transition"
                >
                  Stats
                </Link>
              </li>
            </ul>
          </nav>
          
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-blue-500'} hover:opacity-90 transition`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
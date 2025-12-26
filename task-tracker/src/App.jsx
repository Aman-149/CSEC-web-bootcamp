import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './store/taskContext';
import Header from './components/Header';
import Home from './pages/Home';
import Stats from './pages/Stats';

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </main>
          <footer className="text-center p-4 mt-8 text-gray-600">
            <p>Task Tracker Application © 2024</p>
          </footer>
        </div>
      </Router>
    </TaskProvider>
  );
};

export default App;
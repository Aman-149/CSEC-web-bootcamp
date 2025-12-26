import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load tasks and dark mode from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const addTask = (taskText) => {
    if (taskText.trim() === '') return;
    
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const getStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const remaining = total - completed;
    
    return { total, completed, remaining };
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      darkMode,
      addTask,
      toggleTaskCompletion,
      deleteTask,
      toggleDarkMode,
      getStats
    }}>
      {children}
    </TaskContext.Provider>
  );
};
import React, { useState } from 'react';
import { useTasks } from '../store/taskContext';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const { addTask, darkMode } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    
    addTask(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a new task..."
          className={`flex-grow px-4 py-3 rounded-lg border ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'bg-white border-gray-300 text-gray-800'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <button
          type="submit"
          disabled={taskText.trim() === ''}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            taskText.trim() === ''
              ? 'bg-gray-400 cursor-not-allowed'
              : darkMode
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-green-500 hover:bg-green-600'
          } text-white`}
        >
          Add Task
        </button>
      </div>
      {taskText.trim() === '' && (
        <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Task cannot be empty
        </p>
      )}
    </form>
  );
};

export default TaskInput;
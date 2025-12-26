import React from 'react';
import { useTasks } from '../store/taskContext';

const TaskItem = ({ task }) => {
  const { toggleTaskCompletion, deleteTask, darkMode } = useTasks();

  return (
    <li className={`mb-3 p-4 rounded-lg transition ${
      darkMode 
        ? 'bg-gray-700 hover:bg-gray-600' 
        : 'bg-white hover:bg-gray-50 border border-gray-200'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
          />
          <span className={`text-lg ${task.completed ? 'line-through opacity-60' : ''} ${
            darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>
            {task.text}
          </span>
        </div>
        
        <button
          onClick={() => deleteTask(task.id)}
          className={`px-3 py-1 rounded text-sm font-medium transition ${
            darkMode
              ? 'bg-red-700 hover:bg-red-600 text-white'
              : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
          aria-label="Delete task"
        >
          Delete
        </button>
      </div>
      
      {task.completed && (
        <div className={`mt-2 text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
          ✓ Completed
        </div>
      )}
    </li>
  );
};

export default TaskItem;
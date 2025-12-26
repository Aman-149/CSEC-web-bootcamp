import React from 'react';
import { useTasks } from '../store/taskContext';

const Stats = () => {
  const { getStats, tasks, darkMode } = useTasks();
  const { total, completed, remaining } = getStats();

  const statsCards = [
    {
      title: 'Total Tasks',
      value: total,
      color: 'blue',
      icon: '📋'
    },
    {
      title: 'Completed',
      value: completed,
      color: 'green',
      icon: '✅'
    },
    {
      title: 'Remaining',
      value: remaining,
      color: 'yellow',
      icon: '⏳'
    },
    {
      title: 'Completion Rate',
      value: total > 0 ? `${Math.round((completed / total) * 100)}%` : '0%',
      color: 'purple',
      icon: '📈'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: darkMode ? 'bg-blue-900' : 'bg-blue-100',
      green: darkMode ? 'bg-green-900' : 'bg-green-100',
      yellow: darkMode ? 'bg-yellow-900' : 'bg-yellow-100',
      purple: darkMode ? 'bg-purple-900' : 'bg-purple-100'
    };
    return colors[color] || colors.blue;
  };

  const getTextColorClasses = (color) => {
    const colors = {
      blue: darkMode ? 'text-blue-300' : 'text-blue-700',
      green: darkMode ? 'text-green-300' : 'text-green-700',
      yellow: darkMode ? 'text-yellow-300' : 'text-yellow-700',
      purple: darkMode ? 'text-purple-300' : 'text-purple-700'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h2 className="text-3xl font-bold mb-8">Task Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-xl ${getColorClasses(stat.color)} transition transform hover:scale-105`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{stat.icon}</span>
              <span className={`text-2xl font-bold ${getTextColorClasses(stat.color)}`}>
                {stat.value}
              </span>
            </div>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {stat.title}
            </h3>
          </div>
        ))}
      </div>
      
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h3 className="text-xl font-semibold mb-4">Task Breakdown</h3>
        
        {total === 0 ? (
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            No tasks to display. Add some tasks from the Home page!
          </p>
        ) : (
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Progress: {completed} of {total} tasks completed
                </span>
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {total > 0 ? Math.round((completed / total) * 100) : 0}%
                </span>
              </div>
              <div className={`h-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                <div 
                  className="h-full rounded-full bg-green-500 transition-all duration-500"
                  style={{ width: `${total > 0 ? (completed / total) * 100 : 0}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">Task Distribution</h4>
              <div className="flex space-x-2">
                <div 
                  className="h-8 bg-green-500 rounded-l"
                  style={{ width: `${total > 0 ? (completed / total) * 100 : 0}%` }}
                  title="Completed"
                ></div>
                <div 
                  className="h-8 bg-yellow-500 rounded-r"
                  style={{ width: `${total > 0 ? (remaining / total) * 100 : 0}%` }}
                  title="Pending"
                ></div>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className={darkMode ? 'text-green-400' : 'text-green-600'}>
                  Completed: {completed}
                </span>
                <span className={darkMode ? 'text-yellow-400' : 'text-yellow-600'}>
                  Pending: {remaining}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
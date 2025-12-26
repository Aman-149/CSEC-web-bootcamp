import React from 'react';
import { useTasks } from '../store/taskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, darkMode } = useTasks();

  if (tasks.length === 0) {
    return (
      <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <p className="text-xl">No tasks yet. Add your first task!</p>
      </div>
    );
  }

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div>
      {pendingTasks.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Pending Tasks ({pendingTasks.length})
          </h2>
          <ul>
            {pendingTasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        </div>
      )}
      
      {completedTasks.length > 0 && (
        <div>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Completed Tasks ({completedTasks.length})
          </h2>
          <ul>
            {completedTasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskList;
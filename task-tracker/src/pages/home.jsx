import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Add New Task</h2>
        <TaskInput />
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-6">Your Tasks</h2>
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
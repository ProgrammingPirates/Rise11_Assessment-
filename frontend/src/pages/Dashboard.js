import React from 'react';
import './Dashboard.css';
import TodoList from '../components/TodoList';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <TodoList />
    </div>
  );
};

export default Dashboard;

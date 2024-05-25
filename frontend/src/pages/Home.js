import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Todo App</h1>
      <p>Please login or signup to continue.</p>
      <div className="button-group">
        <Link to="/login" className="button">Login</Link>
        <Link to="/signup" className="button">Signup</Link>
      </div>
    </div>
  );
};

export default Home;

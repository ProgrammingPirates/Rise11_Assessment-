import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../services/api';
import TodoItem from './TodoItem';
import './TodoList.css';  // Import the CSS file

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await getTodos(token);
        setTodos(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTodos();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createTodo({ task }, token);
      setTodos([...todos, res.data]);
      setTask('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (id, updatedTask) => {
    try {
      const res = await updateTodo(id, updatedTask, token);
      setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id, token);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

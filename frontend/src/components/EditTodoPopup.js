// src/components/EditTodoPopup.js
import React, { useState } from 'react';
import './EditTodoPopup.css';

const EditTodoPopup = ({ todo, handleUpdate, closePopup }) => {
  const [task, setTask] = useState(todo.task);

  const handleSave = () => {
    handleUpdate(todo._id, { task });
    closePopup();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Edit Task</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={closePopup}>Cancel</button>
      </div>
    </div>
  );
};

export default EditTodoPopup;

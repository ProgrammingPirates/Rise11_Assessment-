import React, { useState } from 'react';


const TodoItem = ({ todo, handleUpdate, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    handleUpdate(todo._id, { task });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.task}</span>
         <button className="edit" onClick={handleEdit}>Edit</button>
        <button className="delete" onClick={() => handleDelete(todo._id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;

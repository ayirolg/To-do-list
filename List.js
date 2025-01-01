import React, { useState } from 'react';

function List({ task, priority, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    onUpdate(editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };
  const getPriorityClass = () => {
    switch (priority) {
      case 'High':
        return 'text-danger'; 
      case 'Medium':
        return 'text-warning'; 
      case 'Low':
        return 'text-success'; 
      default:
        return '';
    }
  };
  
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center shadow-sm rounded mb-2">
      {isEditing ? (
        <input type="text" value={editedTask} onChange={handleChange} className='form-control' />
      ) : (
        <span className={`task-text ${getPriorityClass()}`}>{task}</span> 
      )}
      <div>
        {isEditing ? (
          <button className='btn btn-success btn-sm m-1' onClick={handleSave}>Save</button>
        ) : (
          <button className='btn btn-primary btn-sm m-1' onClick={handleEdit}>Edit</button>
        )} 
        <button className="btn btn-danger btn-sm m-1" onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}
export default List;

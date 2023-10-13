import React, { useState } from 'react';

function Task({ task, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const taskStyle = {
    marginRight: '8px',
    textDecoration: isCompleted ? 'line-through' : 'none',
  };

  return (
    <li>
      <input type="checkbox" checked={isCompleted} onChange={handleComplete} />
      <span style={taskStyle}>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Task;
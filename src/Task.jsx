import React, { useState } from 'react';

function Task({ task, onDelete, onToggleCompletion }) {
  const { description, completed } = task;

  const taskStyle = {
    marginRight: '8px',
    textDecoration: completed ? 'line-through' : 'none',
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleCompletion}
      />
      <span style={taskStyle}>{description}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Task;

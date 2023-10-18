import React, { useState } from 'react';
import useTaskManager from './useTaskManager';
import Task from './Task';

function TaskList() {
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTaskManager();
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    addTask(task);
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
            onToggleCompletion={() => toggleTaskCompletion(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

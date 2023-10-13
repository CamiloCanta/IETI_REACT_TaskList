import React, { useState, useEffect } from 'react';
import Task from './Task';

function TaskList() {
  // Inicializa el estado de tareas a partir de localStorage o un arreglo vacío si no hay datos almacenados.
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [task, setTask] = useState('');

  // Función para agregar una tarea a la lista y guardar en localStorage.
  const addTask = () => {
    if (task) {
      const newTask = {
        description: task,
        completed: false, // Inicialmente, la tarea no está completada.
      };

      // Agrega la nueva tarea al estado y guarda en localStorage.
      setTasks([...tasks, newTask]);
      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));

      setTask('');
    }
  };

  // Función para marcar una tarea como completada o pendiente.
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;

    // Actualiza el estado y guarda en localStorage.
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Función para eliminar una tarea de la lista y guardar en localStorage.
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Utiliza el hook useEffect para cargar las tareas desde localStorage al cargar la página.
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
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

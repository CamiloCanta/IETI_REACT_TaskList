import { useState, useEffect } from 'react';

// Define un hook personalizado para gestionar las tareas.
function useTaskManager() {
  // Inicializa el estado de tareas a partir de localStorage o un arreglo vacío si no hay datos almacenados.
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);

  // Función para agregar una tarea a la lista y guardar en localStorage.
  const addTask = (taskDescription) => {
    if (taskDescription) {
      const newTask = {
        description: taskDescription,
        completed: false, // Inicialmente, la tarea no está completada.
      };

      // Agrega la nueva tarea al estado y guarda en localStorage.
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, newTask];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return updatedTasks;
      });
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

  return {
    tasks,
    addTask,
    toggleTaskCompletion,
    deleteTask,
  };
}

export default useTaskManager;

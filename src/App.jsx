import './App.css'
import {useState} from 'react';

//Le pasaremos el `id` como `key`, la tarea, y las funciones de borrado y completado para poder usarlas en cada tarea:
import Task from './components/Task';

//Le pasaremos la función de añadir para usarla:
import AddTaskForm from './components/AddTaskForm'; 

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

//Crear una función llamada `addTask` que cree las tareas:

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1, //Contabilizaremos cuantos elementos hay en el array y añadiremos el siguiente número como `id`
      text, //Sacaremos ese valor del input que tenemos que crear en `addTaskForm.jsx`
      completed: false //La crearemos por defecto en `false`.
    };
    setTasks([...tasks, newTask]); //Al añadir la nueva tarea se tienen que mantener las anteriores.
  };

//Una función `deleteTask` que elimine las tareas.

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

//Crear una función que al pulsar en la tarea se tache o se quite el tachado.

const markTask = (taskId) => {
  setTasks(tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task));
};

  return (
    <>
    <h1>lista de tareas</h1>
      <AddTaskForm addTask={addTask} />
       <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} markTask={markTask}/>
      ))}
      </div>
    </>
  );
};

export default App;

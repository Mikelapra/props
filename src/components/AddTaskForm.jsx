//Crearemos un input que recoja el valor y añada las tarea al resto de tareas:

import {useState} from 'react';

function AddTaskForm({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); //Se evita que la página se recargue cuando se envía el formulario.
    addTask(input); //Llama a la función "addTask" que está como prop al componente "AddTaskForm".
    setInput(''); // Después de añadir una tarea, se limpia el formulario al poner "input" a un string vacio. Así el usuario pueda escribir una nueva tarea sin tener que borrar manualmente la tarea anterior.
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Añadir tarea</button>
        </form>
    </>
  );
}

export default AddTaskForm;
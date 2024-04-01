//Aquí tendremos cada una de las tareas con las funcionalidades de `borrar` y `marcar como completada`. 


function Task({ task, deleteTask, markTask }) {
  return (
    <>
        <div>
            <div onClick={() => markTask(task.id)} style={{ textDecoration: task.completed ? 'line-through' : "none"}}>
            {task.text}</div>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
    </>
  );
}

export default Task;
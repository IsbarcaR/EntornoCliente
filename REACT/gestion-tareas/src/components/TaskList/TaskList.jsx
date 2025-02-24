function TaskList({ tasks, onDeleteTask, onToggleTask , onEditTask}) {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(index)}
            />
            <span style={{
              textDecoration: task.completed ? 'line-through' : 'none'
            }}>
              {task.text}
            </span>
            <button onClick={() => onDeleteTask(index)}>
              Eliminar
            </button>
            <input
            type="text"
            value={task.text}
            onChange={(e) => onEditTask(index, e.target.value)}
           
          />
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;
  
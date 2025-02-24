import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import './App.css';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState(()=>{
	const tareasGuardadas= localStorage.getItem('tareas');
	return tareasGuardadas?JSON.parse(tareasGuardadas):[];
  });
  const [filtros,setFilter]=useState('todas');

  useEffect(()=>{
	localStorage.setItem('tareas',JSON.stringify(tasks));
  },[tasks])

  const addTask = (text) => {
	setTasks([...tasks, { text, completed: false }]);
  };

  const deleteTask = (index) => {
	setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
	setTasks(tasks.map((task, i) =>
  	i === index ? { ...task, completed: !task.completed } : task
	));
  };
  const editTask=(index,texto)=>{
	setTasks(
		tasks.map((task,i)=>(i===index? {...task, text: texto}:task))
	);

  }

  const tareasFiltradas= tasks.filter((task)=>{
	if(filtros=== 'completada') return task.completed;
	if(filtros=== 'incompleta') return !task.completed;
	return true;

  })

 

  return (
	<div className="app">
  	<h1>Gestión de Tareas - 2º DAW</h1>
  	<TaskForm onAddTask={addTask} />
	<div>

		<button onClick={()=>setFilter('todas')}>Todas</button>
		<button onClick={()=>setFilter('completada')}>Completas</button>
		<button onClick={()=>setFilter('incompleta')}>Incompletas</button>

	</div>
  	<TaskList
    	tasks={tareasFiltradas}
    	onDeleteTask={deleteTask}
    	onToggleTask={toggleTask}
		onEditTask={editTask}

  	/>
	</div>
  );
}

export default App;

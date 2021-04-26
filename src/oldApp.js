import React, {useEffect, useState} from 'react';
import './App.css';
import ListHeader from './components/ListHeader';
// import Task from './components/Task';
import TaskInput from './components/TaskInput';
import TaskWithCheckbox from './components/TaskWithCheckbox';
// import {logDOM} from "@testing-library/react";
import 'react-input-checkbox/lib/react-input-checkbox.min.css';
import './styles-for-checkbox.css';

const initialTasks = [
	{id: 0, text: 'BUY A MAC', isDone: false},
	{id: 1, text: 'PICK UP KIDS', isDone: true},
	{id: 2, text: 'BUY AN IPAD', isDone: false},
	{id: 3, text: 'SAVE PSD', isDone: false},
	{id: 4, text: 'EMAIL DAVID', isDone: true},
];

const App = () => {
	const [ tasks, setTasks ] = useState(initialTasks);
	const [ taskText, setTaskText ] = useState('');
	const activeTasks = tasks.filter(task => !task.isDone).length;


	const [ activeTasksCounter, setActiveTasksCounter ] = useState(activeTasks);

	const addTask = () => {
		setTasks([ ...tasks, { id: tasks.length || 0, text: taskText, isDone: false } ]);
	};

	return(
		<div className='App'>
			<ListHeader activeTasks={ activeTasks } />

			{/*{*/}
			{/*    tasks.map((task) => (*/}
			{/*        <Task */}
			{/*            task={task} */}
			{/*            isDone={task.isDone} */}
			{/*            text={task.text} */}
			{/*            key={task.id}/>*/}
			{/*    ))*/}
			{/*}*/}

			{
				tasks.map((task,) => (
					<TaskWithCheckbox
						tasks={ tasks }
						setTasks={ setTasks }
						task={ task }
						setActiveTasksCounter={ setActiveTasksCounter }
					/>
				))
			}

			<TaskInput
				tasks={ tasks }
				// setActiveTasksCounter={ setActiveTasksCounter }
				// activeTasksCounter={ activeTasksCounter }
				taskText={ taskText }
				setTaskText={ setTaskText }
				addTask={ addTask }
			/>
		</div>
	)
}

export default App;
import React from 'react';
import { TaskWithCheckboxComponent } from './TaskWithCheckboxComponent';
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../reduxStore/task/actions";



const TaskWithCheckboxContainer = ({  tasks, task, setTasks }) => {
	const dispatch = useDispatch();

	const updateTasks = () => {
		dispatch(toggleTask(task));
		console.log(task.id);
	};
	const deleteTasks = () => {
		dispatch(deleteTask(task.id))
		console.log(task.id);
	};
	const displayComments = () => {
		const index = tasks.findIndex(el => el.id === task.id)
		const parentDiv = document.getElementsByClassName('comments-pos');
		const commentWindow = document.createElement('div');
		commentWindow.id = 'commentWindow';
		
		const commentParagraph = document.createElement('p');
		commentParagraph.innerText = task.comment;
		commentWindow.append(commentParagraph);
		
		parentDiv[index].append(commentWindow)
		
		if (index === tasks.length - 1) {
		
		}
		
		// console.log(
		// 	parentDiv[index],
		// 	parentDiv[index].children.length,
		// 	index
		// );
	}
	const hideComments = () => {
		const index = tasks.findIndex(el => el.id === task.id)
		const parentDiv = document.getElementsByClassName('comments-pos');
		const commentWindow = document.querySelector('#commentWindow');
		if (commentWindow) {
			parentDiv[index].removeChild(commentWindow)
		}
	}
	
	
	// DISPLAY COMMENTS -->
	// 						1) create comments element
	//						2) append it to appropriate TASK onMouseEnter
	//						3) unplug element onMouseLeave
	//						4)
	//						5)
	//						6)
	
	
	return(
		<TaskWithCheckboxComponent
			updateTasks={ updateTasks } //
			task={ task }
			setTasks={ setTasks }
			deleteTasks={ deleteTasks }
			displayComments={ displayComments }
			hideComments={ hideComments }
		/>
	);
};

export { TaskWithCheckboxContainer };
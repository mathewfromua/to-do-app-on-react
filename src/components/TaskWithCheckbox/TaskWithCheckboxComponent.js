import React from "react";
import { Checkbox } from 'react-input-checkbox';
import { logDOM } from "@testing-library/react";

const TaskWithCheckboxComponent = ({
									   hideComments,
									   displayComments,
									   deleteTasks,
									   updateTasks,
									   task, }) => {

	const className = 'material-checkbox comments-pos ' + ( task.isDone ? 'task-done' : '' );

	return(
		<div className={ className }>
			<Checkbox
				theme="material-checkbox"
				value={ task.isDone }
				onChange={ () => {
					updateTasks();
					  }}
				children={''}
			/>
			<div className='divForText'>
				<p onMouseEnter={ displayComments } onMouseLeave={ hideComments } title='Click to see comments' > { task.text }</p>
			</div>
			<button className='delete-btn' onClick={ () => deleteTasks() }>X</button>
		</div>
	);
};

export { TaskWithCheckboxComponent };
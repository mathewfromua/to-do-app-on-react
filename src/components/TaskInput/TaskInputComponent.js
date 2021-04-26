import React from "react";

const TaskInputComponent = ({ taskComment, setTaskComment, taskText, setTaskText, addTask }) => {
	return(
		<div className='task-input'>
			<label className='input-label'>
				<input
					value={ taskText }
					onChange={(event) => {
						setTaskText(event.target.value);
					}}
					autoFocus
					placeholder='New task name...'
					onKeyDown={(e) => {
							if (e.key === 'Enter' && taskText !== '') {
								addTask();
								setTaskText('');
								setTaskComment('');
								console.log('ADDED TASK WITH ENTER')
							}
						}
					}
				>
				</input>
				<input
					value={ taskComment }
					onChange={(event) => {
						setTaskComment(event.target.value);
						console.log(taskComment);
					}}
					placeholder='Any comments...'
					onKeyDown={(e) => {
							if (e.key === 'Enter' && taskText !== '') {
								addTask();
								setTaskText('');
								setTaskComment('');
								console.log('ADDED TASK WITH ENTER')
							}
						}
					}
				>
				</input>
			</label>

			<button
				title='Press to add task'
				className='add-btn'
				onClick={ () => {
					if (taskText !== '') {
						addTask();
						setTaskText('');
						setTaskComment('');
						console.log('CLICKED ADD BUTTON')
					}
			}}
			>ADD</button>
		</div>
	)
}

export { TaskInputComponent };

import React, {useState} from 'react';

const TaskComponent = ({task, isDone, text}) => {

	const [ actionValue, setActionValue ] = useState(isDone)

	const ActionBtn = () => {
		return(
			<div
				className='action-btn'
				onClick={(event) => {
					setActionValue(!actionValue)
				}}
			>
				{
					actionValue ? <p >✅</p> : <p>❌</p>
				}
			</div>
		);
	};
	const className = 'task ' + ( actionValue ? 'task-done' : '' );

	return(
		<div className={ className }>
			<p>{ text }</p>
			<ActionBtn></ActionBtn>
		</div>
	);
};

export { TaskComponent };
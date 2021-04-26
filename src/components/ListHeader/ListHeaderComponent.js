import React from "react";

const ListHeaderComponent = ({ activeTasks }) => {
	return (
		<h1 className="top">
			ToDoList
			<br/>
			<span className='subtitle'>tasks left: { activeTasks }</span>
		</h1>
	)
};

export { ListHeaderComponent };

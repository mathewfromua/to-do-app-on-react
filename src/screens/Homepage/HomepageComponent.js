import React from 'react';
import ListHeader from "../../components/ListHeader";
import TaskWithCheckbox from "../../components/TaskWithCheckbox";
import TaskInput from "../../components/TaskInput";

const HomepageComponent = ({ ...props }) => {
	return(
		<div className='App'>
			<ListHeader activeTasks={ props.activeTasks } />
			{
				props.tasks.map((task, index) => (
					<TaskWithCheckbox
						key={ index }
						tasks={ props.tasks }
						task={ task }
					/>
				))
			}
			<TaskInput
				tasks={ props.tasks }
				taskText={ props.taskText }
				taskComment={ props.taskComment }
				setTaskText={ props.setTaskText }
				setTaskComment={ props.setTaskComment }
				addTask={ props.addTask }
			/>
		</div>
	)
}
export { HomepageComponent };
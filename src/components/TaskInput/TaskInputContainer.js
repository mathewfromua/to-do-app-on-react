import React from "react";
import { TaskInputComponent } from "./TaskInputComponent";

const TaskInputContainer = ({
			activeTasksCounter,
			taskText,
			setTaskText,
			taskComment,
			setTaskComment,
			addTask,
}) => {
	return(
		<TaskInputComponent
			activeTasksCounter={ activeTasksCounter }
			taskText={ taskText }
			setTaskText={ setTaskText }
			taskComment={ taskComment }
			setTaskComment={ setTaskComment }
			addTask={ addTask }
		/>
	);
};

export { TaskInputContainer };
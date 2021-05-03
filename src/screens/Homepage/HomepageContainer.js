import React, {useState} from "react";
import { HomepageComponent } from "./HomepageComponent";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../reduxStore/task/actions";

const HomepageContainer = () => {
	// const [tasks, setTasks] = useState(initialTasks);
	const { tasks } = useSelector(store => store.taskReducer)
	const dispatch = useDispatch();

	const addNewTask = () => dispatch(addTask(taskText, taskComment));

	const [ taskText, setTaskText ] = useState('');
	const [ taskComment, setTaskComment ] = useState('');

	const activeTasks = tasks.filter(task => !task.isDone).length;
	
	return (
		<HomepageComponent
			activeTasks={activeTasks}
			tasks={tasks}
			taskText={taskText}
			setTaskText={setTaskText}
			taskComment={taskComment}
			setTaskComment={setTaskComment}

			addTask={addNewTask}
		/>
	)
};

export { HomepageContainer };
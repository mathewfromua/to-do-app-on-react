import React, {useState} from "react";
import { HomepageComponent } from "./HomepageComponent";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../reduxStore/task/actions";

const HomepageContainer = () => {
	// const [tasks, setTasks] = useState(initialTasks);
	const {tasks} = useSelector(store => store.taskReducer)
	const dispatch = useDispatch();

	const addNewTask = () => dispatch(addTask(taskText , taskComment));
	// const toggleTask = () => dis


	const [ taskText, setTaskText ] = useState('');
	const [ taskComment, setTaskComment ] = useState('');

	const activeTasks = tasks.filter(task => !task.isDone).length;

	// const addTask = () => {
	// 	setTasks([...tasks, {id: tasks.length || 0, text: taskText, isDone: false}]);
	// };


	// const navParams = useParams();
	// console.log(navParams);
	// console.log(tasks)
	return (
		<HomepageComponent
			activeTasks={activeTasks}
			tasks={tasks}
			// setTasks={setTasks}
			taskText={taskText}
			setTaskText={setTaskText}
			taskComment={taskComment}
			setTaskComment={setTaskComment}

			addTask={addNewTask}
		/>
	)
};

export { HomepageContainer };
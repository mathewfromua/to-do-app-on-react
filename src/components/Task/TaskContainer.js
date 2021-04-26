import React, {useState} from 'react';
import { TaskComponent } from './TaskComponent';

const TaskContainer = ({task, isDone, text}) => {
	const [doneState, setDoneState] = useState(isDone)
	return (
		<TaskComponent task={ task } isDone={ doneState } text={ text }/>
	)
};

export { TaskContainer };



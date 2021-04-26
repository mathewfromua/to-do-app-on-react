import { taskActionTypes } from "./actionTypes";

export const addTask = (text, comment) => {
	return { type: taskActionTypes.TASK_ADD, payload: { text, comment } };
}

export const deleteTask = (id) => {
	return { type: taskActionTypes.TASK_DELETE, payload: id };
}

export const toggleTask = (task) => {
	return { type: taskActionTypes.TASK_TOGGLE, payload: task };
}
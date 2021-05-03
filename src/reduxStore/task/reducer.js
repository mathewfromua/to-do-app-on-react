import { taskActionTypes } from "./actionTypes";

const taskReducerInitialState = {
	tasks: [
		{
			id: 0,
			text: 'Buy a MacBook',
			isDone: false,
			comment: 'With the latest M1 chip and 8 core graphics'
		},
		{
			id: 1,
			text: 'Pick up kids',
			isDone: true,
			comment: 'School ends at 4pm'
		},
		{
			id: 2,
			text: 'Buy an iPad for John',
			isDone: false,
			comment: 'Budget ~600$'
		},
		{
			id: 3,
			text: 'Save PSD',
			isDone: false,
			comment: 'And set AdobePhotoshop as default'
		},
		{
			id: 4,
			text: 'Email David',
			isDone: true,
			comment: 'Ask about scholarship and required tests'
		},
	],
}

export const taskReducer = (state = taskReducerInitialState, action) => {
	switch (action.type) {
		case taskActionTypes.TASK_ADD:
			// console.log(state)
			return {
				...state,
				tasks: [
					...state.tasks, {
						id: state.tasks.length || 0,
						text: action.payload.text,
						idDone: false,
						comment: action.payload.comment
					}
				],
			}
		case taskActionTypes.TASK_DELETE:
			return {
				...state,
				tasks: state.tasks.filter(task => task.id !== action.payload),
			};
		case taskActionTypes.TASK_TOGGLE:
			const index = state.tasks.findIndex(task => task.id === action.payload.id)
			// console.log(index)
			state.tasks[index] = {
				id: action.payload.id,
				text: action.payload.text,
				isDone: !action.payload.isDone,
				comment: action.payload.comment
			}
			return {
				...state,
			};
		default:
			return state;
	}
}
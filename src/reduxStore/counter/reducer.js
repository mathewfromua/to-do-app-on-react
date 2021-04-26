const initialValues = {
	value: 0,
};

export const counterReducer = (state = initialValues, action) => {
	switch (action.type) {
		case 'COUNTER_INCREMENTED':
			return { value: state.value + 1 }
		case 'COUNTER_DECREMENTED':
			return { value: state.value - 1 }
		default:
			return state
	}
}


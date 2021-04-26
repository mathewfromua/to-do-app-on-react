import { counterTypes } from './actionTypes'

export const incrementValue = () => {
	return { type: counterTypes.COUNTER_INCREMENTED }
}

export const decrementValue = () => {
	return { type: counterTypes.COUNTER_DECREMENTED }
}
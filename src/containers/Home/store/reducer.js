import { HOME_LIST } from './constants';

const defaultState = {
	list: []
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case HOME_LIST:
			return {
				...state,
				list: action.list
			}
		default:
			return state;
	}
}
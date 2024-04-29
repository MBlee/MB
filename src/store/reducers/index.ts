export * from './frontEnd'
export * from './backEnd'
export * from './deploy'

const localState = localStorage.getItem("global");
const defaultState = localState
	? JSON.parse(localState)
	: {
		currentRoute:''
	};

const reducers = {
	changeRoute: (state, route) => {
		const stateCp = {...state,currentRoute:route};

		localStorage.setItem("global", JSON.stringify(stateCp));
		return stateCp;
	},
};

const GlobalReducer = (state = [...defaultState], payload) => {
	const reducer = reducers[payload.type];
	if (reducer) {
		return reducer(state, payload.keys);
	}
	return [...state];
};

export default GlobalReducer
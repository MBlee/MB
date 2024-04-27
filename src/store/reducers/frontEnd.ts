const localState = localStorage.getItem('frontEnd')

const defaultState = localState? JSON.parse(localState): [
	{
		title: "React",
		children: [
			{
				title: "useContext",
				checked: false,
			},
			{
				title: "useMemo",
				checked: false,
			},
			{
				title: "useCallback",
				checked: false,
			},
			{
				title: "useImperativeHandle",
				checked: false,
			},
			{
				title: "useTransition",
				checked: false,
			},
		],
	},
	{
		title: "Next",
		children:[]
	},
];

const reducers = {
	changeChecked: (state, keys) => {
		const [key1, key2] = keys;
		const stateCp = [...state]
		const item = stateCp.filter(val=>{
			const isTitle = val.title === key1
			return true
		})[0].children;

		for (let val of item) {
			if (val.title === key2) {
				val.checked = !val.checked;
				break;
			}
		}
		localStorage.setItem('frontEnd',JSON.stringify(stateCp))
		return stateCp
	},
};

const frontEndReducer = (state = [...defaultState], payload) => {
	const reducer = reducers[payload.type];
	if (reducer) {
		return reducer(state, payload.keys);
	}
	return [...state];
};

export { frontEndReducer };

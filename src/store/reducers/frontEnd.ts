const defaultState = [
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
	},
];

const userReducer = (state=[...defaultState], payload) => {
	switch (payload.type) {
		case "changeChecked":
			return [...state];
		default:
			return state;
	}
};

export default userReducer;

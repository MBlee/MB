const localState = localStorage.getItem("frontEnd");

const defaultState = localState
	? JSON.parse(localState)
	: [
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
						type: "divider",
					},
					{
						title: "route5",
						checked: false,
					},
					{
						title: "route6",
						checked: false,
						type: "divider",
					},
					{
						title: "redux",
						checked: false,
					},
					{
						title: "@redux/toolkit",
						checked: false,
					},{
						title: "localStorage",
						checked: false,
						type:'divider'
					},
					{
						title: "@craco/craco",
						checked: false,
					},
					{
						title: "测试",
						checked: false,
					}
				],
			},
			{
				title: "Next",
				children: [
					{
						title: "路由",
						checked: false,
					},
					{
						title: "组件",
						checked: false,
					},
					{
						title: "第三方组件",
						checked: false,
					},
					{
						title: "状态管理",
						checked: false,
					},
					{
						title: "本地缓存",
						checked: false,
					},
				],
			},
			{
				title: "UniApp",
				children: [
					{
						title: "路由",
						checked: false,
					},
					{
						title: "组件",
						checked: false,
					},
					{
						title: "第三方组件",
						checked: false,
					},
					{
						title: "状态管理",
						checked: false,
					},
					{
						title: "本地缓存",
						checked: false,
					},
				],
			},
		];

const reducers = {
	changeChecked: (state, keys) => {
		const [key1, key2] = keys;
		const stateCp = [...state];

		for (let val of stateCp) {
			if (val.title === key1) {
				for (let v of val.children) {
					if (v.title === key2) {
						v.checked = !v.checked;
						break;
					}
				}
				break;
			}
		}

		localStorage.setItem("frontEnd", JSON.stringify(stateCp));
		return stateCp;
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

const localState = localStorage.getItem("backEnd");

const defaultState = localState
	? JSON.parse(localState)
	: [
			{
				title: "Express",
				children: [
					{
						title: "Cookie",
						checked: false,
					},
					{
						title: "Session",
						checked: false,
					},
					{
						title: "JWT",
						checked: false,
					},
					{
						title: "Multer",
						checked: false,
					}
				],
			},
			{
				title: "Mysql",
				children: [
					{
						title: "增删改查",
						checked: false,
					},
					{
						title: "账户权限",
						checked: false,
					},
					{
						title: "数据备份",
						checked: false,
					},
					{
						title: "数据迁移",
						checked: false,
					},
					{
						title: "多端部署",
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

		localStorage.setItem("backEnd", JSON.stringify(stateCp));
		return stateCp;
	},
};

const backEndReducer = (state = [...defaultState], payload) => {
	const reducer = reducers[payload.type];
	if (reducer) {
		return reducer(state, payload.keys);
	}
	return [...state];
};

export { backEndReducer };

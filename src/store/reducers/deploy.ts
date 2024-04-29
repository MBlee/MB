const localState = localStorage.getItem("deploy");

const defaultState = localState
	? JSON.parse(localState)
	: [
			{
				title: "网站",
				children: [
					{
						title: "静态部署",
						checked: false,
					},
					{
						title: "缓存",
						checked: false,
					},
					{
						title: "压缩",
						checked: false,
					},{
						title: "防高频",
						checked: false,
						type:'divider'
					},
					{
						title: "动态部署",
						checked: false,
					},
					{
						title: "HTTP并发",
						checked: false,
					},
					{
						title: "Node缓存",
						checked: false,
					},
					{
						title: "页面压缩",
						checked: false,
					},
					{
						title: "防请求高频",
						checked: false,
						type:'divider'
					}
				],
			},
			{
				title: "Linux",
				children: [
					{
						title: "Nginx",
						checked: false,
					},
					{
						title: "Tomcat",
						checked: false,
					},
					{
						title: "Apache",
						checked: false,
						type:'divider'
					},
					{
						title: "CDN",
						checked: false,
					},
					{
						title: "私服",
						checked: false,
					},
					{
						title: "第三方包",
						checked: false,
						type:'divider'
					},{
						title: "Docker",
						checked: false,
					},{
						title: "CICD",
						checked: false,
						type:'divider'
					},
				],
			},
		];

const reducers = {
	changeDeployChecked: (state, keys) => {
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

		localStorage.setItem("deploy", JSON.stringify(stateCp));
		return stateCp;
	},
};

const deployReducer = (state = [...defaultState], payload) => {
	const reducer = reducers[payload.type];
	if (reducer) {
		return reducer(state, payload.keys);
	}
	return [...state];
};

export { deployReducer };

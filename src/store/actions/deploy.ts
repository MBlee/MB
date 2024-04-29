
const toChangeCheckedDeploy = (keys:any):any =>{
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch({
				type:'changeDeployChecked',
				keys
			})
		},200)
	}
}

export {
	toChangeCheckedDeploy
}
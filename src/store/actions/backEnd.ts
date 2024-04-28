
const toChangeCheckedBackEnd = (keys:any):any =>{
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch({
				type:'changeChecked',
				keys
			})
		},200)
	}
}

export {
	toChangeCheckedBackEnd
}
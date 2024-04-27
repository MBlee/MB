// User模块
interface UserStateInt{
	token:string
}
interface UserSetTokenInt{
	type:'SET_TOKEN',
	token:string
}
type UserActionType = UserSetTokenInt

export {
	StateInt,
	// User模块
	UserStateInt,
	UserSetTokenInt,
	UserActionType
}
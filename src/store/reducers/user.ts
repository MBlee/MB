import {UserStateInt,UserActionType} from '@store/typings'

const initialState:UserStateInt = {
	token:''
}

const userReducer = (state=initialState, payload:UserActionType):UserStateInt=>{

	switch (payload.type)	{
		case "SET_TOKEN":
			return {
				...state,
				token:payload.token
			}
		default:
			return state
	}

}

export default userReducer
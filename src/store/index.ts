import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {frontEndReducer,backEndReducer,deployReducer} from './reducers'


const reducers = combineReducers({
		frontEndReducer,backEndReducer,deployReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
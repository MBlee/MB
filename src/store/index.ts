import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {frontEndReducer} from './reducers'


const reducers = combineReducers({
		frontEndReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
import { legacy_createStore as createStore, combineReducers } from 'redux'
import { todosReducer } from './todosReducer'

const rootReducer = combineReducers({
    todos: todosReducer,
})

export default createStore(rootReducer)
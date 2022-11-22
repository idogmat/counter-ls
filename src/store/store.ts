import {combineReducers} from 'redux';
import {counterReducer} from './counterReducer';
import {legacy_createStore as createStore} from 'redux'

const rootReducer = combineReducers({
counterReducer
})

export const store = createStore(rootReducer)


export type AppStateType = ReturnType<typeof rootReducer>

import {combineReducers} from 'redux';
import {counterReducer} from './counterReducer';
import {legacy_createStore as createStore} from 'redux'

const rootReducer = combineReducers({
counterReducer
})

export const store = createStore(rootReducer)
store.dispatch({
    type: 'SET-COUNT-VALUE',
    count: Number(localStorage.getItem('count'))
})
store.dispatch({
    type: 'SET-START-VALUE',
    startValue: Number(localStorage.getItem('startValue'))
})
store.dispatch({
    type: 'SET-END-VALUE',
    endValue: Number(localStorage.getItem('endValue'))
})

export type AppStateType = ReturnType<typeof rootReducer>

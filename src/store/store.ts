import {applyMiddleware, combineReducers} from 'redux';
import {counterReducer} from './counterReducer';
import {legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorege";

const rootReducer = combineReducers({
counterReducer
})


export const store = createStore(
    rootReducer,
    loadState(),
    applyMiddleware(thunk)
);
store.subscribe(() => {
    saveState({
        ...store.getState()
    });
});
// export const store = createStore(rootReducer,preloadedState,applyMiddleware(thunk),)


export type AppStateType = ReturnType<typeof rootReducer>
// export type AppDispatch = ReturnType<typeof store.dispatch>


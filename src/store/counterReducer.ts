import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

const initialState = {
    startValue: 0,
    endValue: 9,
    count: 0,
    optionView: true,
    error: false
}

export type CounterStateType = {
    startValue: number,
    endValue: number,
    count: number,
    optionView: boolean,
    error: boolean
}
type ActionType =
    ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setEndValueAC>
    | ReturnType<typeof setOptionViewAC>
    | ReturnType<typeof setCountValueAC>
    | ReturnType<typeof setErrorAC>
export const counterReducer = (state: CounterStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state, count: state.count + 1
            }
        }
        case 'RESET': {
            return {
                ...state, count: state.startValue
            }
        }
        case 'SET-START-VALUE': {
            return {
                ...state, startValue: action.startValue
            }
        }
        case 'SET-END-VALUE': {
            return {
                ...state, endValue: action.endValue
            }
        }
        case 'SET-COUNT-VALUE': {
            return {
                ...state, count: action.count
            }
        }
        case 'SET-VIEW': {
            return {
                ...state, optionView: action.optionView
            }
        }
        case 'SET-ERROR': {
            return {
                ...state, error: action.error
            }
        }
        default:
            return state
    }
}


export const incrementAC = () => ({type: 'INCREMENT'}) as const
export const resetAC = () => ({type: 'RESET'}) as const
export const setStartValueAC = (startValue: number) => ({type: 'SET-START-VALUE', startValue}) as const
export const setEndValueAC = (endValue: number) => ({type: 'SET-END-VALUE', endValue}) as const
export const setCountValueAC = (count: number) => ({type: 'SET-COUNT-VALUE', count}) as const
export const setOptionViewAC = (optionView: boolean) => ({type: 'SET-VIEW', optionView}) as const
export const setErrorAC = (error: boolean) => ({type: 'SET-ERROR', error}) as const

// export const setCountValueTC = (): ThunkAction<void , AppStateType, unknown, ActionType> => (dispatch, getState) => {
//     localStorage.setItem('count', (getState().counterReducer.count+1).toString())
//     dispatch(incrementAC())
// }
// export const getCountValueTC = (): ThunkAction<void , AppStateType, unknown, ActionType> => (dispatch) => {
//     let count= Number(localStorage.getItem('count'))
//     count && dispatch(setCountValueAC(count))
// }
// export const getCountValuesThunkLS = (): ThunkAction<void, AppStateType, unknown, any> => (dispatch) => {
//     let count = Number(localStorage.getItem('count')),
//         startValue = Number(localStorage.getItem('startValue')),
//         endValue = Number(localStorage.getItem('endValue'))
//     dispatch(setCountValueAC(count))
//     dispatch(setStartValueAC(startValue))
//     dispatch(setEndValueAC(endValue))
//
// }
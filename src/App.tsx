import React, {useEffect, useState} from 'react';

import './App.css';
import Btn from "./components/Btn";
import InputOrCounter from "./components/InputOrCounter";
import {AppStateType} from "./store/store";
import {
  CounterStateType,
  incrementAC, resetAC,
  setCountValueAC,
  setEndValueAC, setErrorAC,
  setOptionViewAC,
  setStartValueAC
} from "./store/counterReducer";
import {useDispatch, useSelector} from "react-redux";

type RangeType = {
  max: number
  min: number
}

function App() {
  const {startValue, endValue, count, optionView,error} = useSelector<AppStateType, CounterStateType>(state => state.counterReducer)
  const dispatch = useDispatch()






  // let [error, setError] = useState<boolean>(false)
  let [option, setOption] = useState<boolean>(true)
  let [inputError, setInputError] = useState<boolean>(false)


  const changeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (startValue === endValue) {
      dispatch(setErrorAC(true))
      if (e.currentTarget.id === 'max' && +e.target.value > startValue) {
        dispatch(setEndValueAC(+e.target.value))
        dispatch(setErrorAC(false))
      } else {
        if (e.currentTarget.id === 'min' && +e.target.value < endValue) {
          dispatch(setStartValueAC(+e.target.value))
          dispatch(setErrorAC(false))
        } else{
          dispatch(setErrorAC(true))
        }
      }
    } else {
      if (e.currentTarget.id === 'max') {
        dispatch(setEndValueAC(+e.target.value))
      } else {
        dispatch(setStartValueAC(+e.target.value))
      }
    }

  }
  const setMaxMinRange = () => {
    if (!error) {
      console.log(optionView,error)
      dispatch(setCountValueAC(startValue))
      dispatch(setOptionViewAC(!optionView))
    } else if(error){
      console.log(optionView,error)

    }
  }
  const increment = () => {
    if (count < endValue) {
      dispatch(incrementAC())
    } else {
      dispatch(setErrorAC(true))
    }
  }
  const reset = () => {
    if (startValue <= endValue) {
      dispatch(setErrorAC(false))
      dispatch(resetAC())
    }
  }
  return (
    <div className="App">
      <div className={'mainBlock'}>
        <InputOrCounter optionView={optionView}
                        changeRange={changeRange}
                        count={count}
                        startValue={startValue}
                        endValue={endValue}
                        error={error}
                        inputError={inputError}/>
        <div className={'counterTable'}>
          {optionView
            ? <>
              <Btn title={'set'} callBack={setMaxMinRange}></Btn>
              <Btn error={error} title={'inc'} callBack={increment}></Btn>
              <Btn title={'reset'} callBack={reset}></Btn>
            </>
            : <Btn title={'set'} callBack={setMaxMinRange}></Btn>
          }
        </div>
        {/*<div>*/}
        {/*  <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>*/}
        {/*  <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>*/}
        {/*  <button onClick={clearLocalStorage}>clearLocalStorage</button>*/}
        {/*  <button onClick={removeItemLocalStorage}>removeItemLocalStorage</button>*/}
        {/*</div>*/}
      </div>
    </div>

  );
}

export default App;

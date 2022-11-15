import React, {useEffect, useState} from 'react';

import './App.css';
import Btn from "./components/Btn";
import InputOrCounter from "./components/InputOrCounter";

type RangeType = {
  max: number
  min: number
}

function App() {



  let [avgRange, setAwsCounters] = useState<RangeType>({max: 9, min: 1})
  let [range, setRange] = useState<RangeType>(avgRange);
  let [counter, setCounter] = useState<number>(range.min)
  let [error, setError] = useState<boolean>(false)
  let [option, setOption] = useState<boolean>(true)
  let [inputError, setInputError] = useState<boolean>(false)
  let c = 0;
  let r:RangeType = {...range};
  const changerAvgRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.id === 'max') {
      let aws = {...avgRange}
      aws.max = +e.target.value
      setAwsCounters({...aws})
    } else {
      let aws = {...avgRange}
      aws.min = +e.target.value
      setAwsCounters({...aws})
    }

  }
  const changeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (avgRange.min === avgRange.max) {
      setInputError(true)
      if (e.currentTarget.id === 'max' && +e.target.value > avgRange.max) {
        let aws = {...avgRange}
        aws.max = +e.target.value
        setAwsCounters({...aws})
        setInputError(false)
      } else {
        if (e.currentTarget.id === 'min' && +e.target.value < avgRange.min) {
          let aws = {...avgRange}
          aws.min = +e.target.value
          setAwsCounters({...aws})
          setInputError(false)
        }
      }
    } else {
      changerAvgRange(e)
    }

  }
  const setOptionMenu = () => {
    setOption(!option)
  }

  const setMaxMinRange = () => {
    if (avgRange.min >= avgRange.max || avgRange.max === counter) {
      setError(true)
    } else {
      setError(false)
      setCounter(avgRange.min)
      setRange({...avgRange})
      setOptionMenu()
      localStorage.setItem('rangeMax',JSON.stringify(avgRange.max))
      localStorage.setItem('rangeMin',JSON.stringify(avgRange.min))
    }
  }
  const increment = () => {
    if (counter < range.max) {
      let num = ++counter
      setCounter(num)
    } else {
      setError(true)
    }
  }
  const reset = () => {
    if (range.min <= range.max) {
      setError(false)
      setCounter(range.min)
    }
  }
  // const setToLocalStorageHandler = () => {
  //   localStorage.setItem('counter',JSON.stringify(counter))
  // }

  const getFromLocalStorageHandler = () => {
    let lsC=localStorage.getItem('counter')
    let lsRMax=localStorage.getItem('rangeMax')
    let lsRMin=localStorage.getItem('rangeMin')
    if(lsC) {
      setCounter(JSON.parse(lsC))
      console.log()
      c = JSON.parse(lsC);
    }
    if(lsRMax && lsRMin){
      let obj:RangeType = {max:+lsRMax,min:+lsRMin}
      setAwsCounters(obj)
      setRange(obj)
    }
  }
  useEffect(()=>{
    getFromLocalStorageHandler()
  },[])

  useEffect(()=>{
    localStorage.setItem('counter',JSON.stringify(c ? c : counter))
    c = 0;
  },[counter])

  return (
    <div className="App">
      <div className={'mainBlock'}>
        <InputOrCounter option={option}
                        changeRange={changeRange}
                        counter={counter}
                        avgRange={avgRange}
                        error={error}
                        inputError={inputError}/>
        <div className={'counterTable'}>
          {option
            ? <>
              <Btn title={'set'} callBack={setOptionMenu}></Btn>
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

import React from 'react';
import s from './InputOtCounter.module.css'
type InputType={
    error:boolean
    option:boolean
    inputError:boolean
    counter:number
    avgRange:{
        max:number
        min:number
    }
    changeRange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

function InputOrCounter(props:InputType) {

    return (
        <> <div className={'counters' + ' ' + `${props.error && 'error'}`}>
            {props.option ?
                    <div className={'counterTable'}>
                        {props.counter}
                    </div>
                :
                <>
                <div className={'countersBlock'}>
                    <label htmlFor="max">max value:</label><input
                    className={props.inputError ? s.inputError : ''} id={'max'}
                          value={props.avgRange.max}
                          onChange={(e) => props.changeRange(e)} type="number"/>
                </div>
                <div className={'countersBlock'}>
                <label htmlFor="min">min value:</label><input
                    className={props.inputError ? s.inputError : ''} id={'min'}
                        value={props.avgRange.min}
                        onChange={(e)=>props.changeRange(e)} type="number"/>
                </div>
                </>
            }
        </div>
        </>
    );
}

export default InputOrCounter;
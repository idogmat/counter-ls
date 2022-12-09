import React, {useState} from 'react';
import s from './InputOtCounter.module.css'
type InputType={
    error:boolean
    optionView:boolean
    inputError:boolean
    count:number
    startValue:number
    endValue:number

    changeRange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

function InputOrCounter(props:InputType) {

    const changerAvgRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.changeRange(e)
    }
    return (
        <> <div className={'counters' + ' ' + `${props.error && 'error'}`}>
            {props.optionView ?
                    <div className={'counterTable'}>
                        {props.count}
                    </div>
                :
                <>
                <div className={'countersBlock'}>
                    <label htmlFor="max">max value:</label><input
                    className={props.inputError ? s.inputError : ''} id={'max'}
                          value={props.endValue}
                          onChange={(e) => changerAvgRange(e)} type="number"/>
                </div>
                <div className={'countersBlock'}>
                <label htmlFor="min">min value:</label><input
                    className={props.inputError ? s.inputError : ''} id={'min'}
                        value={props.startValue}
                        onChange={(e)=>changerAvgRange(e)} type="number"/>
                </div>
                </>
            }
        </div>
        </>
    );
}

export default InputOrCounter;
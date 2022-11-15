import React from 'react';
import s from './Btn.module.css'
type BtnType={
    title:string
    callBack:()=>void
    error?:boolean
}
const Btn = (props:BtnType) => (
    <button disabled={props.error} onClick={props.callBack} className={s.btn}>{props.title}</button>
);

export default Btn;
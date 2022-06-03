import React from 'react'
import { ACTIONS } from './App'

const DigitButton = ({dispatch, digit}) => {

    const clickHandler = ()=>{
        dispatch({type:ACTIONS.ADD_DIGIT, payload:{digit}})
    }

  return (
    <button onClick={clickHandler}>{digit}</button>
  )
}

export default DigitButton
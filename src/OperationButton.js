import React from 'react'
import { ACTIONS } from './App'

const OperationButton = ({dispatch, operation}) => {

    const clickHandler = ()=>{
        dispatch({type:ACTIONS.CHOOSE_OPERATION, payload:{operation}})
    }

  return (
    <button onClick={clickHandler}>{operation}</button>
  )
}

export default OperationButton
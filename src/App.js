import "./App.css";
import React, {useReducer} from "react";
import DigitButtons from "./Components/DigitButtons";
import OperationButton from "./Components/OperationButton";
import {reducer} from './Components/Reducerfunc';

export const ACTIONS={
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION:'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE:'evaluate',
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-US',{
  maximumFractionDigits:0,
})

function formatOperand(operand){
  if(operand== null) return 
  const [integer, decimal]= operand.split('.');
  if(decimal==null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}
function App (){
 
 const [state, dispatch]= useReducer(reducer, {});

 const {currentOperand, previousOperand, operation} = state;

 return (
  <div className="calculator-grid">
    <div className="output-area">
      <div className="previous-operand">{formatOperand(previousOperand)}{operation}</div>
      <div className="current-operand">{formatOperand(currentOperand)}</div>
    </div>
    <button className="span-two diffcolor" onClick={()=>dispatch({type:ACTIONS.CLEAR})}>AC</button>
    <button className="diffcolor" onClick={()=>dispatch({type:ACTIONS.DELETE_DIGIT})}>DEL</button>
    <OperationButton operation='/' dispatch={dispatch} />
    <DigitButtons digit='1' dispatch={dispatch}/>
    <DigitButtons digit='2' dispatch={dispatch}/>
    <DigitButtons digit='3' dispatch={dispatch}/>
    <OperationButton operation='*' dispatch={dispatch} />
    <DigitButtons digit='4' dispatch={dispatch}/>
    <DigitButtons digit='5' dispatch={dispatch}/>
    <DigitButtons digit='6' dispatch={dispatch}/>
    <OperationButton operation='+' dispatch={dispatch} />
    <DigitButtons digit='7' dispatch={dispatch}/>
    <DigitButtons digit='8' dispatch={dispatch}/>
    <DigitButtons digit='9' dispatch={dispatch}/>
    <OperationButton operation='-' dispatch={dispatch} />
    <DigitButtons digit='.' dispatch={dispatch}/>
    <DigitButtons digit='0' dispatch={dispatch}/>
    <button className="span-two" onClick={()=>dispatch({type:ACTIONS.EVALUATE})} >=</button>
  </div>
 )
}
    
export default App;
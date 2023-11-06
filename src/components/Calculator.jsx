import React from 'react'
import InputsDisplay from './InputsDisplay'
import ResultDisplay from './ResultDisplay'

export default function Calculator(props) {
  return (
    <div>
        <InputsDisplay />
        <ResultDisplay display = {props.display}/>
    </div>
  )
}


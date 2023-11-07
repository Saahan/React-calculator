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

//Thigs to do:
// - Add keypress functionality
// - Style Calculator (.done)
// - Readjust floating point for large numbers (.done)
// -Readjust display for large numbers


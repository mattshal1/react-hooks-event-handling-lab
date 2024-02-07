import React from 'react'

export default function EyesOnMe() {
    function blurHandler(){
        console.log('Hey! Eyes on me!')
    }
    function focusHandler(){
        console.log('Good!')
    }
  return (
    <div>
      <button onBlur={blurHandler} onFocus={focusHandler}>Eyes on me</button>
    </div>
  )
}

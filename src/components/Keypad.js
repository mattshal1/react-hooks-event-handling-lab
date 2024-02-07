import React from 'react'


export default function Keypad() {
    
    function changeHandler(){
        console.log('Entering password...')
      } 
      return (
        <div>
          <input type='password' onChange={changeHandler}/>
        </div>
      )
    }
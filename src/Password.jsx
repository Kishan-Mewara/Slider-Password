// function 
//  password length
//  char
// password

// options
// number alllow
// special char allow

import React, { useEffect, useState } from 'react'

function Password() {

    const [passLength, setPassLength] = useState(6)
    const [password, setPassword] = useState('')
    const [charAllow, setCharAllow] = useState()
    const [numberAllow, setNumberAllow] = useState()

function PassGen(){

    let pass = ''
    let str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

    if(numberAllow){
        str += 1234567890
    }

    if(charAllow){
     str += '!@#$%^&*()'
    }


    for(let i=1;i<=passLength;i++){
        let random = Math.floor(Math.random() * str.length)
        pass += str[random]
         
    }
setPassword(pass)

}

useEffect(() => {
    PassGen()
}, [numberAllow,charAllow])


  return (
    
    <div>
        <h1>Hello</h1>
        <input type="text" value={password} />
        <input type="checkbox" onChange={() => {
            setNumberAllow((Number) => !Number)
        }} name="number" id="num" /> Number
        <input type="checkbox" onChange={() => {
            setCharAllow((character) => !character)
        }} name="character" id="char" /> Character
        <button onClick={PassGen}>clock</button>
      
    </div>
  )
}

export default Password
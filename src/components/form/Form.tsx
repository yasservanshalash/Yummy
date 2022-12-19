import React from 'react'
import "./Form.css"

type PropType = {
    setUserInput: Function;
}
const Form = ({setUserInput}: PropType) => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    }

  return (
    <div>
        <input type="text" onChange={changeHandler} />
    </div>
  )
}

export default Form
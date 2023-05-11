import React from 'react';
import { useDispatch } from 'react-redux';
import {updateInputValue} from "../action/action"

export default function ComponentB() {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const inputValue = e.target.value;
    dispatch(updateInputValue(inputValue))
  }
  return (
    <div className='container' style={{"marginTop":"190px"}}>
      <h5>Type text to see the magic </h5>
      <input type="text" onChange={handleInput} style={{"marginTop":"20px"}}/>
    </div>
  )
}

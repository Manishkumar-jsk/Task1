import React from 'react'
import {useSelector} from 'react-redux';

export default function ComponentC() {
  const inputValue = useSelector(state => state.changeInput.inputValue);
  return (
    <div style={{"marginTop":"20px"}}>
      <p>Below is Your input</p>
      <p>{inputValue}</p>
    </div>
  )
}

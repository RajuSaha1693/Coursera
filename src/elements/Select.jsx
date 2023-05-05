import React from 'react'

function Select(props) {
  return (
    <select name={props.name}>
        {props.option.map(item=><option value={item} key={item}>{item}</option>)}
    </select>
  )
}

export default Select
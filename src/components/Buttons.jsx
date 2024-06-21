import React from 'react'

function Buttons(props) {
  return (
    <button className={`outline-none px-4 py-1 rounded-full ${props.text} shadow-lg`}
    onClick={props.customClick}
    style={{backgroundColor: props.color }}
    >
      {props.color}
    </button>
  )
}

// Buttons.defaultProps={
//   text: "white"
// }

export default Buttons

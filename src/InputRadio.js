import React from 'react';

export default function InputRadio(props) {
  return (
    <div className="radioBlock">
      <input
        type="radio"
        class="opt-radio"
        name="options"
        id={props.option}
        value={props.option}
      />

      <label for={props.option} class="opt-radio">{props.option}</label>
    </div>
  )
}

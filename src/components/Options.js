import React from "react";
import Option from "./Option";

const Options = (props) => (
    <div>
      <button onClick={props.removeAllOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {props.options.map((option, index) => (
        <Option
          key={index}
          optionText={option}
          removeOption={props.removeOption}
        />
      ))}
    </div>
  );

export default Options;

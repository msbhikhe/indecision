import React from "react";

const Option = (props) => {
  return (
    <div>
      <p>
        {props.optionText}
        <button
          onClick={() => {
            props.removeOption(props.optionText);
          }}
        >
          Remove
        </button>
      </p>
    </div>
  );
};

export default Option;

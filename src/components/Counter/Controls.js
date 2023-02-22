import React from "react";

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <button
        type="button"
        // onClick={() => console.log("Кликнули увеличить")}
        onClick={onIncrement}
      >
        Увеличить на 1
      </button>
      <button
        type="button"
        // onClick={() => console.log("Кликнули уменьшить")}
        onClick={onDecrement}
      >
        Уменьшить на 1
      </button>
    </div>
  );
};

export default Controls;

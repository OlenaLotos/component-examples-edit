import React from 'react';
import './Counter.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      + 1
    </button>
    <button type="button" onClick={onDecrement}>
      - 1
    </button>
  </div>
);
export default Controls;

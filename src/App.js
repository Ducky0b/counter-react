import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "black";
  // if (count > 0) {
  //   color = "green";
  // } else if (count < 0) {
  //   color = "red";
  // } else {
  //   color = "black";
  // }
  const decrease = () => setCount(count - 1);
  const increase = () => setCount(count + 1);
  const reset = () => setCount(0);
  return (
    <div className="container">
      <h1>Counter</h1>
      <span style={{ color }} id="value">
        {count}
      </span>
      <div className="btn-group">
        <button onClick={decrease} className="btn btn-decrease">
          DECREASE
        </button>
        <button onClick={reset} className="btn btn-reset">
          RESET
        </button>
        <button onClick={increase} className="btn btn-increase">
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;

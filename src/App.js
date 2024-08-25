import { useState } from "react";
import "./App.css";

function App() {
  const [cnt, setCount] = useState(0);
  function decreaseHandler() {
    // cnt=cnt-1;
    setCount(cnt - 1);
  }
  function increaseHandler() {
    // cnt=cnt+1;
    setCount(cnt + 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="headingupper">Increment And Decrement</div>
      <div className="contentmiddle">
        <div className="minus">
          <button onClick={decreaseHandler}>-</button>
        </div>
        <div className="count"> {cnt} </div>
        <div className="plus">
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
      <div className="resetbutton" onClick={resetHandler}>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;

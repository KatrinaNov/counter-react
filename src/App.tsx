import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";

function App() {
  const minCount: number = 0;
  const maxCount: number = 5;

  const [count, setCount] = useState<number>(minCount);

  const increaseCount = () => count < maxCount && setCount(count + 1);
  const resetCount = () => setCount(minCount);

  return (
    <div className="App">
      <Counter
        count={count}
        increaseCount={increaseCount}
        resetCount={resetCount}
        minCount = {minCount}
        maxCount = {maxCount}
      />
    </div>
  );
}

export default App;

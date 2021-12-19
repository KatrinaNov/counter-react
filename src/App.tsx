import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

function App() {

  const startingMessage = 'enter values and press "set"';

  const [startCount, setStartCount] = useState<number>(0)
  const [maxCount, setMaxCount] = useState<number>(5)
  const [count, setCount] = useState<number>(startCount);
  const [error, setError] = useState('')

  const increaseCount = () => count < maxCount && setCount(count + 1);
  const resetCount = () => setCount(startCount);

  const changeStartCount = (value: number) =>  {
    setStartCount(value)
    setCount(value)
  }
  const changeMaxCount = (value: number) =>  {
    setMaxCount(value)
  }

  const updateError = (error: string) => setError(error)

  return (
    <div className="App">
      <Settings
        changeStartCount={changeStartCount}
        changeMaxCount={changeMaxCount}
        updateError = {updateError}
        error = {error}
        startingMessage = {startingMessage}
        minCount = {startCount}
        maxCount = {maxCount}
      />
      <Counter
        count={count}
        increaseCount={increaseCount}
        resetCount={resetCount}
        minCount = {startCount}
        maxCount = {maxCount}
        startingMessage = {startingMessage}
        error = {error}
      />
    </div>
  );
}

export default App;

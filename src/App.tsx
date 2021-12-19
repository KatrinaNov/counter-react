import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

function App() {

  const startingMessage = 'enter values and press "set"';

  const [startCount, setStartCount] = useState<number>(0)
  const [maxCount, setMaxCount] = useState<number>(5)
  const [count, setCount] = useState<number>(startCount);
  const [error, setError] = useState('')

  useEffect(() => {
    let startCountAsString = localStorage.getItem('startCount')
    let maxCountAsString = localStorage.getItem('maxCount')
    let countAsString = localStorage.getItem('count')
    if (startCountAsString) {
      setStartCount(JSON.parse(startCountAsString))
    }
    maxCountAsString && setMaxCount(JSON.parse(maxCountAsString))
    countAsString && setCount(JSON.parse(countAsString))


  }, [])

  useEffect(() => {
    localStorage.setItem('startCount', JSON.stringify(startCount))
    localStorage.setItem('maxCount', JSON.stringify(maxCount))
    localStorage.setItem('count', JSON.stringify(count))
  }, [startCount, maxCount, count])

  // const setToLocalStorage = () => {
  //   localStorage.setItem('count', JSON.stringify(count))
  // }
  // const getFromLocalStorage = () => {
  //   let countAsString = localStorage.getItem('count')
  //   if (countAsString) {
  //     setCount(JSON.parse(countAsString))
  //   }
  // }

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

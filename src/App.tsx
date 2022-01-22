import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {AppRootStateType} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {CounterStateType, setCount, setError, setMaxCount, setStartCount} from "./reducers/counterReducer";

function App() {

  const {count, startCount, maxCount, error, startingMessage} = useSelector<AppRootStateType, CounterStateType>(state => state.counter)
  const dispatch = useDispatch()

  const increaseCount = () => count < maxCount && dispatch(setCount(count + 1));
  const resetCount = () => dispatch(setCount(startCount));

  const changeStartCount = (value: number) => {
    updateError(startingMessage)
    if (value >= maxCount || value < 0) {
      updateError('Incorrect value')
    }
    dispatch(setStartCount(value))
    dispatch(setCount(value))
  }
  const changeMaxCount = (value: number) => {
    updateError(startingMessage)
    if (value <= startCount || value < 0) {
      updateError('Incorrect value')
    }
    dispatch(setMaxCount(value))
  }

  const updateError = (error: string) => dispatch(setError(error))

  return (
    <div className="App">
      <Settings
        changeStartCount={changeStartCount}
        changeMaxCount={changeMaxCount}
        updateError={updateError}
        error={error}
        startingMessage={startingMessage}
        minCount={startCount}
        maxCount={maxCount}
      />
      <Counter
        count={count}
        increaseCount={increaseCount}
        resetCount={resetCount}
        minCount={startCount}
        maxCount={maxCount}
        startingMessage={startingMessage}
        error={error}
      />
    </div>
  );
}

export default App;

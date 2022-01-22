import React from 'react';
import s from './Counter.module.css'
import ScoreBoard from "./ScoreBoard";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {CounterStateType, setCount} from "../../reducers/counterReducer";


function Counter() {

  const {
    count,
    startCount,
    maxCount,
    message,
    error
  } = useSelector<AppRootStateType, CounterStateType>(state => state.counter)
  const dispatch = useDispatch()

  const increaseCount = () => count < maxCount && dispatch(setCount(count + 1));
  const resetCount = () => dispatch(setCount(startCount));

  const disabledInc = !!message || count === maxCount
  const disabledRes = !!message || count === startCount

  return (
    <div className={s.counter}>
      <ScoreBoard
        count={count}
        maxCount={maxCount}
        message={message}
        error={error}
      />
      <div className={s.buttons}>
        <Button callback={increaseCount} disabled={disabledInc}>inc</Button>
        <Button callback={resetCount} disabled={disabledRes}>reset</Button>
      </div>
    </div>
  );
}

export default Counter;
import React from 'react';
import s from './Counter.module.css'
import ScoreBoard from "./ScoreBoard";
import Button from "../Button/Button";

type Counter = {
  count: number
  increaseCount: () => void
  resetCount: () => void
  minCount: number
  maxCount: number
}

function Counter({count, increaseCount, resetCount, minCount, maxCount,  ...props} : Counter) {
  return (
    <div className={s.counter}>
      <ScoreBoard count={count} maxCount={maxCount}/>
      <div className={s.buttons}>
        <Button callback={increaseCount} disabled={count === maxCount}>inc</Button>
        <Button callback={resetCount} disabled={count === minCount}>reset</Button>

        {/*<button className={s.btn} onClick={increaseCount} disabled={count === 5}>inc</button>*/}
        {/*<button className={s.btn} onClick={resetCount} disabled={count === 0}>reset</button>*/}
      </div>
    </div>
  );
}

export default Counter;
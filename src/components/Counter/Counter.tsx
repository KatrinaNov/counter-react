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
  error: string
  startingMessage: string
}

function Counter({count, increaseCount, resetCount, minCount, maxCount, ...props}: Counter) {

  const disabledInc = !!props.error || count === maxCount
  const disabledRes = !!props.error || count === minCount

  return (
    <div className={s.counter}>
      <ScoreBoard
        count={count}
        maxCount={maxCount}
        startingMessage={props.startingMessage}
        error={props.error}
      />
      <div className={s.buttons}>
        <Button callback={increaseCount} disabled={disabledInc}>inc</Button>
        <Button callback={resetCount} disabled={disabledRes}>reset</Button>

        {/*<button className={s.btn} onClick={increaseCount} disabled={count === 5}>inc</button>*/}
        {/*<button className={s.btn} onClick={resetCount} disabled={count === 0}>reset</button>*/}
      </div>
    </div>
  );
}

export default Counter;
import React from 'react';
import s from './Counter.module.css'
import Button from "../Button/Button";

type ButtonsPropsType = {
  increaseCount: () => void
  resetCount: () => void
  count: number
  minCount: number
  maxCount: number
}

function Buttons({count, increaseCount, resetCount, minCount, maxCount, ...props}: ButtonsPropsType) {
  return (
    <div className={s.buttons}>
      <Button callback={increaseCount} disabled={count === maxCount}>inc</Button>
      <Button callback={resetCount} disabled={count === minCount}>reset</Button>


      {/*<button className={s.btn} onClick={increaseCount} disabled={count === 5}>inc</button>*/}
      {/*<button className={s.btn} onClick={resetCount} disabled={count === 0}>reset</button>*/}
    </div>
  );
}

export default Buttons;
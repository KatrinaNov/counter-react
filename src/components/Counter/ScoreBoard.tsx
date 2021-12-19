import React from 'react';
import s from './Counter.module.css'

type ScoreBoardType = {
  count: number
  maxCount: number
  error: string
  startingMessage: string
}

function ScoreBoard({count, maxCount, ...props}: ScoreBoardType) {

  const finalClass = `${s.score} ${count === maxCount && s.scoreMax}`;

  return <div className={finalClass}>
    {props.error ? props.error : count}
  </div>

}

export default ScoreBoard;
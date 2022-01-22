import React from 'react';
import s from './Counter.module.css'

type ScoreBoardType = {
  count: number
  maxCount: number
  error: boolean
  message: string
}

function ScoreBoard({count, maxCount, ...props}: ScoreBoardType) {

  const finalClass = `
  ${s.score} 
  ${count === maxCount && s.scoreMax} 
  ${props.error && s.error} 
  ${props.message && s.messageText}
  `;

  return <div className={finalClass}>
    {props.message ? props.message : count}
  </div>

}

export default ScoreBoard;
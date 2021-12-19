import React, {useState} from 'react';
import s from "../Counter/Counter.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

type SettingsType = {
  changeStartCount: (value: number) => void
  changeMaxCount: (value: number) => void
  updateError: (error: string) => void
  error: string
  startingMessage: string
  minCount: number
  maxCount: number
}

const Settings = (props: SettingsType) => {
  const [startCount, setStartCount] = useState<number>(props.minCount);
  const [maxCount, setMaxCount] = useState<number>(props.maxCount);

  const changeStartCount = (value: number) => {
    props.updateError(props.startingMessage)
    if (value >= maxCount || value < 0) {
      props.updateError('Incorrect value')
    }
    setStartCount(value)
  }
  const changeMaxCount = (value: number) => {
    props.updateError(props.startingMessage)
    if (value <= startCount || value < 0) {
      props.updateError('Incorrect value')
    }
    setMaxCount(value)
  }

  const setStartingValues = () => {
    props.changeStartCount(startCount)
    props.changeMaxCount(maxCount)
    props.updateError('')
  }

  const disabled = !props.error || props.error !== props.startingMessage

  return (
    <div className={s.counter}>
      <div>max value:
        <Input
          value={maxCount}
          onChangeInputHandler={changeMaxCount}
        />
      </div>
      <div>start value:
        <Input
          value={startCount}
          onChangeInputHandler={changeStartCount}
        />
      </div>
      <div className={s.buttons}>
        <Button callback={setStartingValues} disabled={disabled}>set</Button>

        {/*<button className={s.btn} onClick={increaseCount} disabled={count === 5}>inc</button>*/}
        {/*<button className={s.btn} onClick={resetCount} disabled={count === 0}>reset</button>*/}
      </div>
    </div>
  );
};

export default Settings;
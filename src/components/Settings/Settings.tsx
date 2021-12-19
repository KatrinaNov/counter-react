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
  const error = startCount >= maxCount

  return (
    <div className={s.counter}>
      <div className={s.score}>
      <div className={s.inputBlock}>
        max value:
        <Input
          value={maxCount}
          onChangeInputHandler={changeMaxCount}
          error={error}
        />
      </div>
      <div className={s.inputBlock}>
        start value:
        <Input
          value={startCount}
          onChangeInputHandler={changeStartCount}
          error={error}
        />
      </div>
      </div>
      <div className={s.buttons}>
        <Button callback={setStartingValues} disabled={disabled}>set</Button>
      </div>
    </div>
  );
};

export default Settings;
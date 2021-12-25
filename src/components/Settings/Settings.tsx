import React from 'react';
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

  const setStartingValues = () => {
    props.changeStartCount(props.minCount)
    props.changeMaxCount(props.maxCount)
    props.updateError('')
  }

  const disabled = !props.error || props.error !== props.startingMessage
  const error = props.minCount >= props.maxCount

  return (
    <div className={s.counter}>
      <div className={s.score}>
      <div className={s.inputBlock}>
        max value:
        <Input
          value={props.maxCount}
          onChangeInputHandler={props.changeMaxCount}
          error={error}
        />
      </div>
      <div className={s.inputBlock}>
        start value:
        <Input
          value={props.minCount}
          onChangeInputHandler={props.changeStartCount}
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
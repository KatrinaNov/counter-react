import React from 'react';
import s from "../Counter/Counter.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {CounterStateType, setCount, setError, setMaxCount, setStartCount} from "../../reducers/counterReducer";

const Settings = () => {

  const {
    startCount,
    maxCount,
    startingMessage,
    error
  } = useSelector<AppRootStateType, CounterStateType>(state => state.counter)

  const dispatch = useDispatch()

  const changeStartCount = (value: number) => {
    dispatch(setError(startingMessage))
    if (value >= maxCount || value < 0) {
      dispatch(setError('Incorrect value'))
    }
    dispatch(setStartCount(value))
    dispatch(setCount(value))
  }
  const changeMaxCount = (value: number) => {
    dispatch(setError(startingMessage))
    if (value <= startCount || value < 0) {
      dispatch(setError('Incorrect value'))
    }
    dispatch(setMaxCount(value))
  }
  const setStartingValues = () => {
    changeStartCount(startCount)
    changeMaxCount(maxCount)
    dispatch(setError(''))
  }

  const disabled = !error || error !== startingMessage
  const isError = startCount >= maxCount

  return (
    <div className={s.counter}>
      <div className={s.score}>
        <div className={s.inputBlock}>
          max value:
          <Input
            value={maxCount}
            onChangeInputHandler={changeMaxCount}
            error={isError}
          />
        </div>
        <div className={s.inputBlock}>
          start value:
          <Input
            value={startCount}
            onChangeInputHandler={changeStartCount}
            error={isError}
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
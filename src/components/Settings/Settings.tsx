import React from 'react';
import s from "../Counter/Counter.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {
  CounterStateType,
  setError,
  setMaxCount,
  setStartCount,
  setStartingValuesAC
} from "../../reducers/counterReducer";

const Settings = () => {

  const {
    startCount,
    maxCount,
    message,
    error
  } = useSelector<AppRootStateType, CounterStateType>(state => state.counter)

  const dispatch = useDispatch()

  const changeStartCount = (value: number) => {
    dispatch(setStartCount(value))
    if (value >= maxCount || value < 0) {
      dispatch(setError())
    }
  }

  const changeMaxCount = (value: number) => {
    dispatch(setMaxCount(value))
    if (value <= startCount || value < 0) {
      dispatch(setError())
    }
  }
  const setStartingValues = () => dispatch(setStartingValuesAC(startCount, startCount, maxCount))

  const isDisabled = error || !message

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
        <Button callback={setStartingValues} disabled={isDisabled}>set</Button>
      </div>
    </div>
  );
};

export default Settings;
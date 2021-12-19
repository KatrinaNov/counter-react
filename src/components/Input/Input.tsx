import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputPropsType = DefaultInputPropsType &{
  value: number
  onChangeInputHandler: (value: number) => void
  spanClassName?: string
}

const Input = (props: InputPropsType) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChangeInputHandler(+e.currentTarget.value)
  }
  return (
    <div>
      <input
        type="number"
        value={props.value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Input;
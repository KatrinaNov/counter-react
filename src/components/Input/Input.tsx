import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './Input.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputPropsType = DefaultInputPropsType &{
  value: number
  onChangeInputHandler: (value: number) => void
  spanClassName?: string
  error?: boolean
}

const Input = (props: InputPropsType) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChangeInputHandler(+e.currentTarget.value)
  }
  const finalClassName =
    `${s.input} 
    ${props.spanClassName && s[props.spanClassName]}
    ${(props.value < 0 || props.error) && s.error} 
    `

  return (
      <input
        type="number"
        value={props.value}
        onChange={onChangeHandler}
        className = {finalClassName}
      />
  );
};

export default Input;
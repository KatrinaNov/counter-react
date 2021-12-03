import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
  callback: () => void
  disabled?: boolean
}

const Button = ({className, callback, disabled, ...props}: ButtonPropsType) => {

  const finalClassName = `${s.btn} ${className}`

  return (
      <button
        className={finalClassName}
        onClick={callback}
        disabled={disabled}
        {...props}/>
  );
}

export default Button;
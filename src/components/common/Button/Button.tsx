import React from 'react';
import cn from 'classnames';

import { ButtonPropsType } from './types';

import './Button.scss';

const Button: React.FC<ButtonPropsType> = ({
  name = 'Submit',
  onClick,
  disabled = false,
  className,
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className="buttonWrap">
      <button
        type="button"
        className={cn('button', { [className]: className })}
        onClick={handleClick}
        disabled={disabled}>
        {name}
      </button>
    </div>
  );
};

export { Button };

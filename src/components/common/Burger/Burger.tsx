import React from 'react';
import cn from 'classnames';

import { BurgerPropsType } from './types';

import './Burger.scss';

const Burger: React.FC<BurgerPropsType> = ({ isActive = false, onClick, className }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className={cn('burger__wrap', { [className]: className })}>
      <button
        type="button"
        className={cn('burger', { burger_active: isActive === true })}
        onClick={handleClick}>
        burger
      </button>
    </div>
  );
};

export { Burger };

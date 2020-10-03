import React from 'react';
import cn from 'classnames';

import { InfoScreenType } from './types';
import { Button } from '../Button/Button';

import './InfoScreen.scss';

const InfoScreen: React.FC<InfoScreenType> = ({
  title = 'title',
  subtitle,
  bgColor = 'pink',
  imageUrl,
  onButtonClick,
}) => {
  const handleButtonClick = () => {
    onButtonClick();
  };
  return (
    <div
      className={cn('infoScreen__wrap', {
        infoScreen__wrap_pink: bgColor === 'pink',
      })}>
      <div className="infoScreen">
        <div className="infoScreen__img">
          <img src={imageUrl} alt="modal" />
        </div>
        <div className="infoScreen__content">
          {subtitle && <h2 className="infoScreen__subtitle">Score</h2>}
          <h1 className="infoScreen__title">{title}</h1>
          <Button className="infoScreen__button" onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export { InfoScreen };

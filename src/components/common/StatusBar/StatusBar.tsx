import React from 'react';
import cn from 'classnames';

import { QuestionIndicator } from '../QuestionIndicator/QuestionIndicator';
import { StatusBarPropsType, QuestionType } from './types';

import './StatusBar.scss';

const StatusBar: React.FC<StatusBarPropsType> = ({ questionsList, isActive, className }) => {
  const questions = questionsList.map((i: QuestionType) => {
    return (
      <li className="statusBar__listItem" key={i.id}>
        <QuestionIndicator value={i.reward} status={i.status} />
      </li>
    );
  });

  return (
    <div
      className={cn(
        'statusBar',
        { statusBar_active: isActive === true },
        { [className]: className }
      )}>
      <ul className="statusBar__list">{questions}</ul>
    </div>
  );
};

export { StatusBar };

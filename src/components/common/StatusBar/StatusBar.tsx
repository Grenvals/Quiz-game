import React from 'react';

import { StatusBarPropsType, QuestionType } from './types';

import './StatusBar.scss';
import { QuestionIndicator } from '../QuestionIndicator/QuestionIndicator';

const StatusBar: React.FC<StatusBarPropsType> = ({ questionsList }) => {
  const questions = questionsList.map((i: QuestionType) => {
    return (
      <li className="statusBar__listItem" key={i.id}>
        <QuestionIndicator value={i.reward} status={i.status} />
      </li>
    );
  });

  return (
    <div className="statusBar">
      <ul className="statusBar__list">{questions}</ul>
    </div>
  );
};

export { StatusBar };

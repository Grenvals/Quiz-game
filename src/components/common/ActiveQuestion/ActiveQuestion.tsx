import React from 'react';
import cn from 'classnames';

import { ActiveQuestionPropsType, AnswerType } from './types';
import { AnswerButton } from '../AnswerButton/AnswerButton';

import './ActiveQuestion.scss';

const ActiveQuestion: React.FC<ActiveQuestionPropsType> = ({
  title,
  onSelect,
  className,
  answersList,
  answerCurrentState,
}) => {
  const answers = answersList.map((i: AnswerType) => {
    const status =
      answerCurrentState && answerCurrentState.id === i.id ? answerCurrentState.status : undefined;
    return (
      <li className="activeQuestion__listItem" key={i.id}>
        <AnswerButton id={i.id} name={i.name} status={status} onClick={onSelect} />
      </li>
    );
  });

  return (
    <div className={cn('activeQuestion', { [className]: className })}>
      <h1 className="activeQuestion__title">{title}</h1>
      <div className="activeQuestion__answers">
        <ul className="activeQuestion__list">{answers}</ul>
      </div>
    </div>
  );
};

export { ActiveQuestion };

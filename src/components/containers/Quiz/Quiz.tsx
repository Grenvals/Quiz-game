import React, { useState } from 'react';

import { ActiveQuestion } from '../../common/ActiveQuestion/ActiveQuestion';
import { StatusBar } from '../../common/StatusBar/StatusBar';
import { Burger } from '../../common/Burger/Burger';

import { QuestionsListType } from '../../../types/types';
import { QuizPropsType } from './types';

import './Quiz.scss';

const Quiz: React.FC<QuizPropsType> = ({ questionsList, setTotalReward, onFinished }) => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
  const [answerCurrentState, setAnswerCurrentState] = useState<any>(null);

  const [activeQuestion, setActiveQuestion] = useState(0);

  const isQuizFinished = () => activeQuestion + 1 === questionsList.length;

  const onSidebarActiveHandler = (): void => {
    setIsSidebarActive(isSidebarActive === false);
  };

  const onSelectAnswerHandler = (id: string) => {
    const question = questionsList[activeQuestion];
    if (answerCurrentState !== null) {
      return;
    }

    if (question.rightAnswer === id) {
      setTotalReward(questionsList[activeQuestion].reward);
      setAnswerCurrentState({
        id,
        status: 'correct',
      });

      setTimeout(() => {
        if (isQuizFinished()) {
          onFinished(true);
        } else {
          setActiveQuestion(activeQuestion + 1);
          setAnswerCurrentState(null);
        }
      }, 1000);
    } else {
      setAnswerCurrentState({
        id,
        status: 'wrong',
      });
      setTimeout(() => {
        onFinished(true);
      }, 1000);
    }
  };

  const sidebarQuestionsList = questionsList.map((q: QuestionsListType) => {
    let status = 'default';
    if (activeQuestion + 1 === Number(q.id)) {
      status = 'active';
    } else if (activeQuestion < Number(q.id)) {
      status = 'inactive';
    }
    return { id: q.id, reward: q.reward, status };
  });

  return (
    <div className="quiz">
      <ActiveQuestion
        className="quiz__question"
        title={questionsList[activeQuestion].title}
        answersList={questionsList[activeQuestion].answersList}
        onSelect={onSelectAnswerHandler}
        answerCurrentState={answerCurrentState}
      />
      <StatusBar
        className="quiz__sidebar"
        isActive={isSidebarActive}
        questionsList={sidebarQuestionsList}
      />
      <Burger
        className="quiz__burger"
        isActive={isSidebarActive}
        onClick={onSidebarActiveHandler}
      />
    </div>
  );
};

export { Quiz };

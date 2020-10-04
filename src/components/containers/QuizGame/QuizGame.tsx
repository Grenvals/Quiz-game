import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { InfoScreen } from '../../common/InfoScreen/InfoScreen';
import { Quiz } from '../Quiz/Quiz';

import { RootStateType } from '../../../types/types';
import { QuizPropsType } from './types';
import {
  getQuizConfig,
  setIsStart,
  setIsFinished,
  setTotalReward,
  setActiveQuestion,
  resetQuiz,
} from '../../../store/actions/actions';
import {
  getActiveQuestion,
  getIsFinished,
  getIsStart,
  getQuestionsList,
  getTotalReward,
} from '../../../store/selectors/selectors';

import modalIcon from '../../../assets/img/modal/hand.svg';

import './QuizGame.scss';

const QuizGame: React.FC<QuizPropsType> = ({
  questionsList,
  isStart,
  isFinished,
  totalReward,
  activeQuestion,
  getQuizConfig,
  setIsStart,
  setIsFinished,
  setTotalReward,
  setActiveQuestion,
  resetQuiz,
}) => {
  useEffect(() => {
    getQuizConfig();
  }, [getQuizConfig]);

  const onStartHandler = () => {
    setIsStart(isStart === false);
  };

  const onResetHandler = () => {
    resetQuiz();
  };

  return (
    <>
      {isStart === true && isFinished === false && questionsList !== null && (
        <Quiz
          questionsList={questionsList}
          setTotalReward={setTotalReward}
          activeQuestion={activeQuestion}
          onFinished={setIsFinished}
          onChangeActiveQuestion={setActiveQuestion}
        />
      )}
      {isStart === false && (
        <InfoScreen
          title="Who wants to be a millionaire?"
          buttonName="Start"
          imageUrl={modalIcon}
          onButtonClick={onStartHandler}
          bgColor="pink"
        />
      )}
      {isFinished === true && (
        <InfoScreen
          title={`$${totalReward} earned`}
          subtitle="Total score:"
          buttonName="Try again"
          imageUrl={modalIcon}
          onButtonClick={onResetHandler}
          bgColor="pink"
        />
      )}
    </>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return {
    questionsList: getQuestionsList(state),
    isStart: getIsStart(state),
    isFinished: getIsFinished(state),
    totalReward: getTotalReward(state),
    activeQuestion: getActiveQuestion(state),
  };
};

const QuizGameContainer = connect(mapStateToProps, {
  getQuizConfig,
  setIsStart,
  setIsFinished,
  setTotalReward,
  setActiveQuestion,
  resetQuiz,
})(QuizGame);

export { QuizGameContainer as QuizGame };

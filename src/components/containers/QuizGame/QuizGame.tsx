import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { InfoScreen } from '../../common/InfoScreen/InfoScreen';

import modalIcon from '../../../assets/img/modal/hand.svg';

import {
  getQuizConfig,
  setIsStart,
  setIsFinished,
  setTotalReward,
  resetQuiz,
} from '../../../store/actions/actions';
import {
  getIsFinished,
  getIsStart,
  getQuestionsList,
  getTotalReward,
} from '../../../store/selectors/selectors';

import { RootStateType } from '../../../types/types';
import { QuizPropsType } from './types';

import './QuizGame.scss';
import { Quiz } from '../Quiz/Quiz';

const QuizGame: React.FC<QuizPropsType> = ({
  questionsList,
  isStart,
  isFinished,
  totalReward,
  getQuizConfig,
  setIsStart,
  setIsFinished,
  setTotalReward,
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
          onFinished={setIsFinished}
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
  };
};

const QuizGameContainer = connect(mapStateToProps, {
  getQuizConfig,
  setIsStart,
  setIsFinished,
  setTotalReward,
  resetQuiz,
})(QuizGame);

export { QuizGameContainer as QuizGame };

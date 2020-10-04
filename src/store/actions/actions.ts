import {
  SET_IS_FINISHED,
  SET_IS_START,
  GET_QUIZ_CONFIG,
  SET_QUIZ_CONFIG,
  SET_TOTAL_REWARD,
  RESET_QUIZ,
  SET_ACTIVE_QUESTION,
} from '../constants/constants';

import { QuestionsListType } from '../../types/types';

interface getQuizConfigType {
  type: typeof GET_QUIZ_CONFIG;
}

interface setQuizConfigType {
  type: typeof SET_QUIZ_CONFIG;
  payload: {
    questionsList: Array<QuestionsListType>,
  };
}

interface setIsStartType {
  type: typeof SET_IS_START;
  payload: {
    isStart: boolean,
  };
}

interface setIsFinishedType {
  type: typeof SET_IS_FINISHED;
  payload: {
    isFinished: boolean,
  };
}
interface setTotalRewardType {
  type: typeof SET_TOTAL_REWARD;
  payload: {
    totalReward: number,
  };
}
interface setActiveQuestionType {
  type: typeof SET_ACTIVE_QUESTION;
  payload: {
    activeQuestion: number,
  };
}
interface resetQuizType {
  type: typeof RESET_QUIZ;
}

export const getQuizConfig = (): getQuizConfigType => ({
  type: GET_QUIZ_CONFIG,
});

export const setQuizConfig = (questionsList: Array<QuestionsListType>): setQuizConfigType => ({
  type: SET_QUIZ_CONFIG,
  payload: {
    questionsList,
  },
});

export const setIsStart = (isStart: boolean): setIsStartType => ({
  type: SET_IS_START,
  payload: {
    isStart,
  },
});

export const setIsFinished = (isFinished: boolean): setIsFinishedType => ({
  type: SET_IS_FINISHED,
  payload: {
    isFinished,
  },
});
export const setTotalReward = (totalReward: number): setTotalRewardType => ({
  type: SET_TOTAL_REWARD,
  payload: {
    totalReward,
  },
});

export const setActiveQuestion = (activeQuestion: number): setActiveQuestionType => ({
  type: SET_ACTIVE_QUESTION,
  payload: {
    activeQuestion,
  },
});

export const resetQuiz = (): resetQuizType => ({
  type: RESET_QUIZ,
});

export type QuizActionTypes =
  | getQuizConfigType
  | setQuizConfigType
  | setIsStartType
  | setIsFinishedType
  | setTotalRewardType
  | setActiveQuestionType
  | resetQuizType;

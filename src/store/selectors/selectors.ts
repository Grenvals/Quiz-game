import { QuestionsListType, RootStateType } from '../../types/types';

export const getQuestionsList = (state: RootStateType): Array<QuestionsListType> | null => {
  return state.quiz.questionsList;
};

export const getIsStart = (state: RootStateType): boolean => {
  return state.quiz.isStart;
};

export const getIsFinished = (state: RootStateType): boolean => {
  return state.quiz.isFinished;
};

export const getTotalReward = (state: RootStateType): number => {
  return state.quiz.totalReward;
};

import { QuestionsListType } from '../../../types/types';

export interface QuizPropsType {
  questionsList: Array<QuestionsListType> | any;
  setTotalReward(totalReward: number): void;
  onFinished(isFinished: boolean): void;
}

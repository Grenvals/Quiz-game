import { QuestionsListType } from '../../../types/types';

export interface QuizPropsType {
  questionsList: Array<QuestionsListType>;
  activeQuestion: number;
  setTotalReward(totalReward: number): void;
  onFinished(isFinished: boolean): void;
  onChangeActiveQuestion(activeQuestion: number): void;
}

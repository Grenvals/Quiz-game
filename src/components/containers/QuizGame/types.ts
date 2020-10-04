import { QuestionsListType } from '../../../types/types';

export interface QuizPropsType {
  questionsList: Array<QuestionsListType> | null;
  isStart: boolean;
  isFinished: boolean;
  totalReward: number;
  getQuizConfig(): void;
  setIsStart(isStart: boolean): void;
  setIsFinished(isFinished: boolean): void;
  setTotalReward(totalReward: number): void;
  resetQuiz(): void;
}

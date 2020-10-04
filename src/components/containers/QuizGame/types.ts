import { QuestionsListType } from '../../../types/types';

export interface QuizPropsType {
  questionsList: Array<QuestionsListType> | null;
  isStart: boolean;
  isFinished: boolean;
  totalReward: number;
  activeQuestion: number;
  getQuizConfig(): void;
  setIsStart(isStart: boolean): void;
  setIsFinished(isFinished: boolean): void;
  setTotalReward(totalReward: number): void;
  setActiveQuestion(activeQuestion: number): void;
  resetQuiz(): void;
}

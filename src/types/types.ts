export interface QuestionsListType {
  id: string;
  title: string;
  answersList: Array<AnswerType>;
  rightAnswer: string;
  reward: number;
}

export type AnswerType = {
  id: string,
  name: string,
};

export type QuizInitialStateType = {
  isSidebarActive: boolean,
  activeQuestion: number,
  isStart: boolean,
  isFinished: boolean,
  totalReward: number,
  questionsList: Array<QuestionsListType> | null,
};

export interface RootStateType {
  quiz: QuizInitialStateType;
}

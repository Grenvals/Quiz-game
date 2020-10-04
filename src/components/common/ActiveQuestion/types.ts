export interface ActiveQuestionPropsType {
  title: string;
  status?: 'correct' | 'wrong';
  className?: any;
  answersList: Array<AnswerType>;
  answerCurrentState?: AnswerCurrentStateType;
  onSelect(id: string): void;
}

export type AnswerType = {
  id: string,
  name: string,
};

export type AnswerCurrentStateType = {
  id: string,
  status: string,
};

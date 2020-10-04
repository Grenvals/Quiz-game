export interface ActiveQuestionPropsType {
  title: string;
  answersList: Array<AnswerType>;
  status?: 'correct' | 'wrong';
  onSelect(id: string): void;
  answerCurrentState?: AnswerCurrentStateType;
}

export type AnswerType = {
  id: string,
  name: string,
};

export type AnswerCurrentStateType = {
  id: string,
  status: string,
};

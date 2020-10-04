export interface StatusBarPropsType {
  questionsList: Array<QuestionType>;
}

export type QuestionType = {
  id: string,
  reward: number,
  status: 'active' | 'inactive' | 'default',
};

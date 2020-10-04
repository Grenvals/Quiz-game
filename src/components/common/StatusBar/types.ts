export interface StatusBarPropsType {
  className?: any;
  isActive?: boolean;
  questionsList: Array<QuestionType>;
}

export type QuestionType = {
  id: string,
  reward: number,
  status: 'active' | 'inactive' | 'default' | any,
};

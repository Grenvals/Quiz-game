export interface AnswerButtonPropsType {
  id: string;
  name: string;
  status?: 'correct' | 'wrong' | any;
  onClick(id: string): void;
}

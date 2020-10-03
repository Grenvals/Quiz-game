export interface AnswerButtonPropsType {
  id: string;
  name: string;
  status?: 'correct' | 'wrong';
  onClick(id: string): void;
}

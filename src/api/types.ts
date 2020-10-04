export interface ConfigAPIType {
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

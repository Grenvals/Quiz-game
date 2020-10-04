import {
  RESET_QUIZ,
  SET_IS_FINISHED,
  SET_IS_START,
  SET_QUIZ_CONFIG,
  SET_TOTAL_REWARD,
  SET_ACTIVE_QUESTION,
} from '../constants/constants';
import { QuizInitialStateType } from '../../types/types';
import { QuizActionTypes } from '../actions/actions';
import { quizInitialState } from '../state/state';

const quizReducer = (state = quizInitialState, action: QuizActionTypes): QuizInitialStateType => {
  switch (action.type) {
    case SET_QUIZ_CONFIG: {
      return {
        ...state,
        questionsList: action.payload.questionsList,
      };
    }
    case SET_IS_START: {
      return {
        ...state,
        isStart: action.payload.isStart,
      };
    }
    case SET_IS_FINISHED: {
      return {
        ...state,
        isFinished: action.payload.isFinished,
      };
    }
    case SET_TOTAL_REWARD: {
      return {
        ...state,
        totalReward: action.payload.totalReward,
      };
    }
    case SET_ACTIVE_QUESTION: {
      return {
        ...state,
        activeQuestion: action.payload.activeQuestion,
      };
    }
    case RESET_QUIZ: {
      return {
        ...state,
        totalReward: 0,
        activeQuestion: 0,
        isStart: false,
        isFinished: false,
      };
    }
    default:
      return state;
  }
};

export { quizReducer };

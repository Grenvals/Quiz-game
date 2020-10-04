import { call, put, takeEvery } from 'redux-saga/effects';
import { configAPI } from '../../api/api';
import { setQuizConfig } from '../actions/actions';
import { GET_QUIZ_CONFIG } from '../constants/constants';

function* loadQuizConfig() {
  try {
    const quizConfig = yield call(configAPI.getConfig);
    yield put(setQuizConfig(quizConfig.questionsList));
  } catch (err) {
    console.log('err', err);
  }
}

export function* watchLoadData(): any {
  yield takeEvery(GET_QUIZ_CONFIG, loadQuizConfig);
}

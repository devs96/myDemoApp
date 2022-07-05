import {put, takeEvery} from 'redux-saga/effects';
import {typeActions} from '../Actions';

function* fetchData(data) {
  try {
    yield put({type: typeActions.GET_VALUE, payload: data.payload});
  } catch (e) {
    console.log(e);
  }
}

function* groupData(data) {
  try {
    yield put({type: typeActions.GROUP_DATA, payload: data.payload});
  } catch (e) {
    console.log(e);
  }
}

function* rootSaga() {
  yield takeEvery(typeActions.SET_DATA, fetchData);
  yield takeEvery(typeActions.SET_GROUP_DATA, groupData);
}
export default rootSaga;

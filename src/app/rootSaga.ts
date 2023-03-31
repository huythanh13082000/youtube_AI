import {all} from 'redux-saga/effects'
import userSaga from '../feature/user/user.saga'
export default function* rootSaga() {
  yield all([userSaga()])
}

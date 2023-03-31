import {call, put, takeEvery} from 'redux-saga/effects'
import {userApi} from '../../apis/userApi'
import {UserType} from '../../types/user.type'
import {userAction} from './user.slice'

function* getInfo() {
  try {
    const user: {data: UserType} = yield call(userApi.getInfo)
    console.log(666, user.data)
    yield put(userAction.getInfoSuccess(user.data))
  } catch (error) {
    console.log(error)
  }
}

export default function* userSaga() {
  yield takeEvery(userAction.getInfo.type, getInfo)
}

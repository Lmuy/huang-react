import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import axios from 'axios'
import { getListAction } from './actionCreators'

function* mySaga() {
  // generator
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  // axios.get('https://www.fastmock.site/mock/035f1bcd9de8a96067c5bdaf366d16d5/react_demo/api/getList').then((res) => {
  //   const data = res.data.data.list;
  //   const action = getListAction(data)
  //   put(action)
  // }).catch(()=>{})
  const res = yield axios.get('https://www.fastmock.site/mock/035f1bcd9de8a96067c5bdaf366d16d5/react_demo/api/getList');
  const action = getListAction(res.data.data.list)
  yield put(action)
}

export default mySaga
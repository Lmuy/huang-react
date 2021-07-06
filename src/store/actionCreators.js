import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'
import store from './index'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = (value) => ({
  type: ADD_ITEM
})

export const delItemAction = (value) => ({
  type: DEL_ITEM,
  value
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/035f1bcd9de8a96067c5bdaf366d16d5/react_demo/api/getList').then((res) => {
      const data = res.data.data.list;
      const action = getListAction(data)
      dispatch(action)
    }).catch(()=>{})
  }
}
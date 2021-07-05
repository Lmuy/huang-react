import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from './actionTypes'
const  defaultState = {
  inputValue: 'write something',
  list: [
    '早上任务',
    '中午任务',
    '晚上任务'
  ]
}
export default (state = defaultState, action)=>{
  // reducer里只能接受state，不能改变state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = ''
    return newState
  }
  if (action.type === DEL_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState
  }
  return state
}
import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'
const  defaultState = {
  inputValue: 'write something',
  list: []
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
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state
}

// react-redux
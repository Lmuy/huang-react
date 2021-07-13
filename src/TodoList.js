import React from 'react';
import { connect } from 'react-redux'
import { getMyListAction, changeInputAction, addItemAction, delItemAction, getListAction, getTodoList } from './store/actionCreators';

const TodoList = (props) => {
  let { inputValue, inputChange, addItem, list } = props

  return (
    <div>
      <div>
        <input value={inputValue} onChange={inputChange}/>
        <button onClick={addItem}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index+item}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  );
}


const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      console.log(e.target.value)
      const action = changeInputAction(e.target.value)
      dispatch(action)
    },
    addItem() {
      const action = addItemAction()
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList);
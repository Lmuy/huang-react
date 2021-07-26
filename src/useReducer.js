import React, { useReducer } from 'react';

function UseReducer() {
  const [count, dispatch] = useReducer((state, action)=>{
    switch(action) {
      case 'add':
        return state+1;
      case 'sub':
        return state-1;
      default:
        return state;
    }
  }, 1)

  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <button onClick={()=>{dispatch('add')}}>加</button>
      <button onClick={()=>{dispatch('sub')}}>减</button>
    </div>
  )
}

export default UseReducer;
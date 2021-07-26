import React from 'react';
import ReactDom from 'react-dom';
// import App from './App'
// import TodoList from './TodoList'
// import ReactHooks from './reactHooks'
// import UseContext from './useContext'
import UseReducer from './useReducer'
import { Provider } from 'react-redux'
import store from './store'

const App = (
  <Provider store={store}>
    <UseReducer />
  </Provider>
)

ReactDom.render(App, document.getElementById('root'))
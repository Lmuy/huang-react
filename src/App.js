import React,{Component, Fragment} from 'react';
import 'antd/dist/antd.css'
// import { Input, Button, List } from 'antd'
import store from './store'
// import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from './store/actionTypes'
import { getMyListAction, changeInputAction, addItemAction, delItemAction, getListAction, getTodoList } from './store/actionCreators';
import TodoListUI from './TodoListUI'
import axios from 'axios'
// import './style.css'
// import Item from './Item'
// import Boss from './Boss'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'

const data = [
  
]
class App extends Component {
  // 在某一时刻,自动执行的函数
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }

  
  render() {
    return (
      <Fragment>
        {/* <div>
          <label htmlFor="myInput">增加数据服务：</label>
          <input
            id="myInput"
            className="input"
            value={this.state.inputValue}
            onChange={(e) => this.inputChange(e)}
          />
          <button onClick={() => this.addList()}>增加数据</button>
        </div>
        <div>
          <ul>
            <TransitionGroup>
              {
                this.state.list.map((item, index) => {
                  return (
                    <CSSTransition
                      timeout={2000}
                      classNames="boss-text"
                      unmountOnExit
                      appear={true}
                      key={index+item}  
                    >
                      <Item
                        content={item}
                        index={index}
                        key={index+item}
                        delItem={(e) => this.delItem(e)}/>
                    </CSSTransition>
                  )
                })
              }
            </TransitionGroup>
          </ul>
        </div> */}
        {/* <Boss /> */}
        {/* <div style={{margin:'8px'}}>
          <Input
            placeholder={this.state.inputValue}
            style={{width:'250px',marginRight:'8px'}}
            onChange={(e) => this.changeInputValue(e)}
            value={this.state.inputValue}
          />
          <Button type='primary' onClick={() => this.clickBtn()}>增加</Button>
          <div style={{marginTop:'8px',width:'300px'}}>
            <List bordered dataSource={this.state.list} renderItem={(item, index) => (<List.Item onClick={() => this.delItem(index)}>{item}</List.Item>)} />
          </div>
        </div> */}
        <TodoListUI
          inputValue={this.state.inputValue}
          changeInputValue={this.changeInputValue}
          clickBtn={this.clickBtn}  
          list={this.state.list}
          delItem={this.delItem}
        />
      </Fragment>
    )
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action)
    // const action = getMyListAction();
    // store.dispatch(action)

  }

  inputChange(e) {
    // console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }
  delItem(index) {
    // let list = this.state.list;
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })
    const action = delItemAction(index)
    store.dispatch(action)
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
  clickBtn() {
    const action = addItemAction()
    store.dispatch(action)
  }
}

export default App;
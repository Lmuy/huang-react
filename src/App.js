import React,{Component, Fragment} from 'react';
import './style.css'
import Item from './Item'

class App extends Component {
  // 在某一时刻,自动执行的函数
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['fdsa', 'ddd']
    }
  }

  
  render() {
    return (
      <Fragment>
        <div>
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
            {
              this.state.list.map((item, index) => {
                return (
                  <Item
                    content={item}
                    index={index}
                    key={index+item}
                    delItem={(e) => this.delItem(e)}/>
                )
              })
            }
          </ul>
        </div>
      </Fragment>
    )
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
    let list = this.state.list;
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default App;
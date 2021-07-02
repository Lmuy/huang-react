import React, { Component } from 'react';
class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
  }
  render() { 
    return (
      <div>
        <div className={this.state.isShow ? 'show' : 'hide'}>Boss级任务-大闹天宫</div>
        <div><button onClick={() => this.toToggole()}>召唤孙悟空</button></div>
      </div>
    );
  }

  toToggole() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
 
export default Boss;
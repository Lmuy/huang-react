import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

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
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
          unmountOnExit
        >
          <div>Boss级任务-大闹天宫</div>
        </CSSTransition>
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
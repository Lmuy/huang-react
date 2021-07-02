import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import axios from 'axios';
class Item extends Component {
  // constructor(porps) {
  //   super(porps)
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  componentDidMount() {
    // 该生命周期中请求数据
    // axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    //   .then((res) => {console.log('数据获取成功' + JSON.stringify(res))})
    //   .catch((error) => {console.log(error)})
  }

  render() { 
    return (
      <li onClick={() => this.handleClick()}>
        {this.props.name}-{this.props.content}
      </li>
    );
  }

  handleClick() {
    this.props.delItem(this.props.index)
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  delItem: PropTypes.func
}
Item.defaultProps = {
  name: '增加'
}
 
export default Item;
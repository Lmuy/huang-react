import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Item extends Component {
  // constructor(porps) {
  //   super(porps)
  // }

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
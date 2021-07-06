import React from 'react';
import { Input, Button, List } from 'antd'

// 无状态组件
const TodoListUI = (props) => {
  return (
    <div style={{margin:'8px'}}>
      <Input
        placeholder={props.inputValue}
        style={{width:'250px',marginRight:'8px'}}
        onChange={(e) => props.changeInputValue(e)}
        value={props.inputValue}
      />
      <Button type='primary' onClick={() => props.clickBtn()}>增加</Button>
      <div style={{marginTop:'8px',width:'300px'}}>
        <List bordered dataSource={props.list} renderItem={(item, index) => (<List.Item onClick={() => props.delItem(index)}>{item}</List.Item>)} />
      </div>
    </div>
  );
}
 
export default TodoListUI;
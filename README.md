### 搭建项目步骤
1.npm install -g create-react-app  
2.create-react-app my-project

## react学习
生命周期： 挂载时: constructor -> getDerivedStateFromProps -> render -> 更新dom -> componentDidMount
          更新时: getDerivedStateFromProps -> shouldComponnetUpdate -> render -> getSnapshotBeforeUpdate -> 更新dom -> componentDidUpdate
          卸载时: componnetWillUnmount


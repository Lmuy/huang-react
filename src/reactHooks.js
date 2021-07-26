import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// class ReactHooks extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 }
//   }
//   render() { 
//     return (
//       <div>
//         <div>You clicked { this.state.count } times</div>
//         <button onClick={() => this.addCount()}>Click me</button>
//       </div>
//     );
//   }
//   addCount() {
//     this.setState({count: this.state.count+1})
//   }
// }

function Index() {
  useEffect(() => {
    console.log(`useEffect => Lmuy.cm`)
    return ()=> {
      console.log('Lmuy leave')
    }
  }, [])
  return <h2>Lmuy.com</h2>
}

function List() {
  useEffect(() => {
    console.log(`useEffect => List page`)
  }, [])
  return <h2>List page</h2>
}

function ReactHooks() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`useEffect => you clicked ${count} times`)
  }, [count])
  return (
    <div>
      <div>You clicked { count } times</div>
      <button onClick={() => setCount(count+1)}>Click me</button>

      <Router>
        <ul>
          <li><Link to="">首页</Link></li>
          <li><Link to="list">列表</Link></li>
        </ul>
        <Route path='/' exact component={Index}></Route>
        <Route path='/list/' component={List}></Route>
      </Router>
    </div>
  )
}
 
export default ReactHooks;
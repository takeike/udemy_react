import React, {Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {counter:0}
  }

  handlePlusButton = () =>{
    this.setState({counter: this.state.counter+1})
  }

  handleMinusButton = () =>{
    this.setState({counter: this.state.counter-1})
  }
  render(){
    return (
    <React.Fragment>
      <div>count: {this.state.counter}</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
    </React.Fragment>
    )
  }
}

export default App;

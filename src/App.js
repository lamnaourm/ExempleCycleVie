import { Component } from 'react';
import './App.css';
import ExempleCycle from './components/ExempleCycle';

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      display: true
    }
  }
  render() {
  return (
    <div>
     { this.state.display && <ExempleCycle /> }

     <button onClick={() => this.setState({display:false})}>close</button>
    </div>
  );}
}

export default App;

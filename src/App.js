import { Component } from 'react';
import './App.css';
import IntroState from './component/IntroState';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      show : false,
    }
  }

  toggleVisibilty = () => {
    this.setState({isVisble: !this.state.isVisble})
  }

  render(){
    return(
        <div className="App">
          <button onClick={this.toggleVisibilty}>
            {this.state.isVisble ? "Hide" : "Show"}
           </button>
          <h1>Cart Profile</h1>
          {this.state.isVisble ? <IntroState/> : <></>}
        </div>
    
    )
  }
}

export default App;

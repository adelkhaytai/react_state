import { Component } from 'react';
import './App.css';
import './component/Style.css'
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
          <button style={{color: 'black',background: 'white', padding: '10px',borderRadius: '10px',}} onClick={this.toggleVisibilty}>
            {this.state.isVisble ? "Hide" : "Show"}
           </button>
          <h1>Cart Profile</h1>
          {this.state.isVisble ? <IntroState/> : <></>}
        </div>
    
    )
  }
}

export default App;

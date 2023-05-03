import { Component } from "react";

class IntroState extends Component{
    constructor(props){
        super(props);
        this.state ={
            fullName: 'khayati Adel',
            bio :  'html , css , js , reactJS',
            imgSRC : '/img-1.jpg',
            profesion: 'Full Stack Devloper',
            timer:  0,
            interval: null, 
        }
    }
    // increment = () =>{
    //     this.setState({count: this.state.count + 1})
    // }

    // decrement = () => {
    //     this.state({ count: this.state.count +1})
    // }

    componentDidMount(){
        this.setState({
            interval:setInterval( ()=>{ 
                this.setState({ timer : this.state.timer + 1})
            },1000)
        })
    }
    componentDidUpdate(){}
    
    componentWillUnmount(){
        clearInterval(this.state.interval)
    }
    
    render() {
        return(
           <div className="co">
             <div className="od">
                <span>{this.state.count}</span>
                <h1>{this.state.fullName}</h1>
                <img src={this.state.imgSRC}/>
                <h3>{this.state.timer}</h3>
                <h4>{this.state.bio} </h4>
                <h3>{this.state.profesion} </h3>
            </div>
           </div>
        )
    }
}
export default IntroState
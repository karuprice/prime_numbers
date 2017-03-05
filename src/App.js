import React, { Component } from 'react';


import './App.css';

const styles = {
    transition: 'all 1s ease-out'
};


class App extends Component {
constructor(props){
    super(props);

    this.state= {
     opacity: 1,
     // scale: 1,
      translateY: "0",
      machineTranslateY: "0px",
      outputTranslateY: "-50px",
      value: '',
      arrToSub: [],
      correct: [],
      incorrect: []
      
    };

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    
  }

    // onHide() {
    //     this.setState({
    //         opacity: 0
    //     });
    // }

    // onScale() {
    //     this.setState({
    //         scale: this.state.scale > 1 ? 1 : 1.3
    //     });
    // }

 

 handleChange(event) {
    this.setState({value: event.target.value
    });
  }

  handleSubmit(event) {
event.preventDefault();
    const arr = []; 

this.moveDown() 

//setTimeout(this.machineMove(), 3000)

const shakey = setInterval(() => {
  this.setState({ machineTranslateY: this.state.machineTranslateY === "0px" ? "-10px" : "0px" });
}, 2000);

setTimeout(() => clearInterval(shakey) , 4000);

setInterval(() => {
  this.setState({ outputTranslateY: "150px", opacity: 1  });
}, 4000);

//setTimeout( clearInterval(shakey), 5000);



 var x = this.state.value

  for (let i = 0; i <= x; i ++) {
        arr.push(i)
      }
     
  const isPrime = arr.filter((el,i,arr) => arr[arr.length-1] % i === 0)
  
  if (isPrime.length === 2){
  
  const toPush = this.state.correct;
    toPush.push(x)
  this.setState({correct: toPush})

} else {
  const toPush = this.state.incorrect;
    toPush.push(x)
  this.setState({incorrect: toPush})
}
  }

   moveDown() {
      this.setState({
        translateY: "100px"
      });
    }

    outputMoveDown() {
      this.setState({
        outputTranslateY: "100px"
      });
    }

    machineMove() {
      this.setState({
        machineTranslateY: this.state.machineTranslateY === "0px" ? "-100px" : "0px"
      })

    }

  render() {
    return (
      <div className="App">
      
        <div className="formContainer">
          <form value="submit" onSubmit={this.handleSubmit}>
            <input  type="text" required value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value=">" />
          </form>         
        </div>

        <div className="numbersInContainer" >
          <h1 className="numbersIn" style={{...styles, opacity: this.state.opacity, transform: 'translateY(' + this.state.translateY + ')'}}>{this.state.incorrect}</h1>
          <h1 className="numbersIn" style={{...styles, opacity: this.state.opacity, transform: 'translateY(' + this.state.translateY + ')'}}>{this.state.correct}</h1>
        </div>

        <div className="machineContainer">



       <div  style={{...styles,        
       display: 'flex',
       position: 'relative',
    'align-items': 'center',
    'justify-content': 'center',
    width: '90%',
    height: '200px',
    marginTop: '32px',
    'background-color': 'lightgrey',
    transform: 'translateY(' + this.state.machineTranslateY + ')'}}> 
    
<i className="fa fa-times-circle-o screw1" aria-hidden="true"></i>
<i className="fa fa-times-circle-o screw2" aria-hidden="true"></i>
<i className="fa fa-times-circle-o screw3" aria-hidden="true"></i>
<i className="fa fa-times-circle-o screw4" aria-hidden="true"></i>

    <div className="outPutContainer">
           <div className="outputHole"><div className="output"
          style={{...styles, transform: 'translateY(' + this.state.outputTranslateY + ')'}}
        ><h1>{this.state.correct}</h1></div></div>
           <div className="outputHole"> <div className="output"
          style={{...styles, transform: 'translateY(' + this.state.outputTranslateY + ')'}}
        ><h1> {this.state.incorrect}</h1></div></div>
           </div>

    Prime Number Machine 
    
    
    </div> 




       



        </div>

       {/*<div className="boxContainer">

       
        <div className="output"
          style={{...styles, transform: 'translateY(' + this.state.outputTranslateY + ')'}}
        >{this.state.correct}</div>
        


        
        <div className="output"
          style={{...styles, transform: 'translateY(' + this.state.outputTranslateY + ')'}}
        >{this.state.incorrect}</div>
      
        </div>*/}

      
        <div className="boxContainer">
          <div className="outputBoxesContainer">
          <div className="isPrime"> 
            <i className="fa fa-dot-circle-o wheel1" aria-hidden="true"></i>
            <i className="fa fa-dot-circle-o wheel2" aria-hidden="true"></i>
            Prime </div>
          <div className="notPrime"> 
            <i className="fa fa-dot-circle-o wheel1" aria-hidden="true"></i>
            <i className="fa fa-dot-circle-o wheel2" aria-hidden="true"></i>
            Not Prime</div>
          </div>
        </div>

  

      

  

      

      </div>
    );
  }
}

export default App;

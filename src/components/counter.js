import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: 0,
    
  }

  
handleIncrement=product=>{
  console.log(product);
 this.setState({count: this.state.count+1});
}
handleDecrement=()=> {
  if(this.state.count===0) return "Add Somethinmg in Card";
  this.setState({count: this.state.count-1});
}

  render() {
    let classes = "badge m-2 badge-"
    classes += this.state.count===0 ? "warning" : "primary";

    return (
    <div> 
      <span className="badge badge-primary m-2" style={{marginRight: 10, paddingtop:5}}> {this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm" onClick={()=>this.handleIncrement(product)} style={{marginRight: 10}}>+</button> 
      <button className="btn btn-secondary btn-sm" onClick={this.handleDecrement}>-</button>
    </div>
    )
  }
  formatCount()
  {
    let count = this.state.count;
    return this.state.count===0 ? "zero" : count;
  }


}

export default Counter;
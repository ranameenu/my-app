import React, { Component } from 'react';



class Counter extends Component {
  state = {
    count: 1,
    
  }

  
// onClickHandle() {
//   this.setState( count: {++ this.state.count})
// }


  render() {
    let classes = "badge m-2 badge-"
    classes += this.state.count===0 ? "warning" : "primary";

    return (
    <div> 
      <span className="badge badge-primary m-2" style={{marginRight: 10}}> {this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm" onClick={this.onClickHandle}>Increase</button>
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
import React, { Component } from 'react';
class Counter extends Component {
  state = {
    value: this.props.value,
    id: this.props.id,
  }

  
handleIncrement=()=>{
 this.setState({value: this.state.value+1});
}


  render() {
    let classes = "badge m-2 badge-"
    classes += this.state.value === 0 ? "warning" : "primary";

    return (
    <div> 
      <h5>Item #{this.state.id}</h5>
      <span className={classes} style={{marginRight: 10, paddingtop:5}}> {this.formatCount()}</span>
      <button 
      className="btn btn-secondary btn-sm" 
      onClick={this.handleIncrement} 
      style={{marginRight: 10}}>
        Increment
        </button> 
      <button 
      className="btn btn-danger btn-sm" 
      onClick={this.props.onDelete} 
      style={{marginRight: 10}}>
        Delete
        </button>
    </div>
    )
  }
  formatCount()
  {
    let value = this.state.value;
    return this.state.value===0 ? "zero" : value;
  }


}

export default Counter;
import React, { Component } from 'react';
class Counter extends Component {
 render() {
    return (
    <div> 
      <span className={this.getBadgeClasses()} style={{marginRight: 10, paddingtop:5}}> {this.formatCount()}</span>
      <button 
      className="btn btn-secondary btn-sm" 
      onClick={() => this.props.onIncrement(this.props.counter)}
      style={{marginRight: 10}}>
        Increment   
           </button> 
      <button 
      className="btn btn-danger btn-sm" 
      onClick={()=>this.props.onDelete(this.props.counter.id)} 
      style={{marginRight: 10}}>
        Delete
        </button>
    </div>
    )
  }

getBadgeClasses(){
  let classes = "badge m-2 badge-"
    classes+=this.props.counter.value===0 ? "warning" : "primary";
  
  return classes;
}


  formatCount()
  {
    let value = this.props.counter.value;
    return this.props.counter.value===0 ? "zero" : value;
  }
  


}

export default Counter;
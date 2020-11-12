import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
    state = {
        counters:[
            {id:1, value:2},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0}
        ]
      }

      handleReset=()=>{
       const resetcount = this.state.counters.map(c => {c.value=0;return c;})
       this.setState({counters: resetcount})
        }

        handleIncrement=()=>{
            this.setState({value: this.state.value+1});
           }


      handleDelete=(counterId)=>{
          const newcounter = this.state.counters.filter(c => c.id!==counterId)
          this.setState({counters:newcounter})
      }
    render() { 
        return <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>

        {this.state.counters.map((counter)=> <Counter 
        key={counter.id} 
        onDelete={this.handleDelete} 
        value={counter.value} 
        id={counter.id} 
        selected 
        /> )}
        </div>  ;
    }
}
 
export default Counters;
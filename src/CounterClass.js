import React from 'react';
import CountDisplay from './CountDisplay';

class CounterClass extends React.Component{
    state ={
        count:0
    }

    addToCount = () =>{
        this.setState(
            prevState => ({count: prevState.count+1})
        )
    }

    removeToCount = () =>{
        this.setState(
            prevState => ({count: prevState.count-1})
        )
    }

    render(){
        return (
            <div className ="counter">
                {/* <h3>{this.state.count}</h3> */}
                <CountDisplay count={this.state.count}/>               

                <div className="counter-button">
                    <button onClick={this.addToCount}>Añadir</button>
                    <button onClick={this.removeToCount}>Quitar</button>
                </div>
            </div>
        )
    }
}

export default CounterClass;
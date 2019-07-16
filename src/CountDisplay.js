import React, {Component} from 'react'

class CountDisplay extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <h3>{this.props.count}</h3>
    }

}

export default CountDisplay;
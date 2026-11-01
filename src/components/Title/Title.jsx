import { Component } from "react";

class Title extends Component {
    render(){
        return(
            <h1>Hello: {this.props.name ? this.props.name : "незнайомець"}</h1>
        )
    }
}

export default Title
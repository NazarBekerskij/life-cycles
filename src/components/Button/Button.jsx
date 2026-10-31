import { Component } from "react";


class Button extends Component {
    render(){
        const {openModal} = this.props
        return(
            <button onClick={openModal} className="cursor-pointer bg-blue-500 py-2 px-4 w-40 h-10 mx-auto text-x1 font-bold text-white rounded-full" type="button">Open Modal</button>
        )
    }
}

export default Button
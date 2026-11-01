import { Component } from "react";
import { createPortal } from "react-dom";

const rootModal = document.getElementById("root-modal")

class Modal extends Component {
  state = {
    name: "",
  }
    
  componentDidMount() { //спрацьомує тіки тоді коли модалка зявляється на екрані
    window.addEventListener("keydown", this.handleEscClose);
  }

  componentWillUnmount() { //Цей метод прибирає стеження за клавішами, коли модалка зникає. Інакше обробник міг би залишитися активним, хоча модалки вже немає
    window.removeEventListener("keydown", this.handleEscClose);
  }

  handleEscClose = (event) => {
    if(event.code === "Escape"){
      this.props.closeModal()
    }
  } 
  
  handleBackdropClose = (event) => {
    if(event.target === event.currentTarget){
      this.props.closeModal()
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const {name} = this.state

    this.props.onName(this.state.name)

    if(name.trim() === ""){return;}

    this.setState({
      name: ""
    })

    this.props.closeModal()
  }

  render() {
    
    const { closeModal } = this.props;
    return (
    createPortal( <div
    onClick={this.handleBackdropClose}
    className="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
  >
    <div className="relative flex min-h-64 w-full max-w-md flex-col justify-center gap-5 rounded-xl bg-white p-8 shadow-xl">
      <button
        type="button"
        onClick={closeModal}
        className="absolute right-4 top-3 text-2xl text-gray-500 hover:text-black"
      >
        ×
      </button>

      <h2 className="text-center text-2xl font-bold text-gray-800">
        Введи своє ім’я
      </h2>

      <form onSubmit={this.handleSubmit} className="flex flex-col gap-4">
        <input
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          type="text"
          placeholder="Твоє ім’я"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />

        <button
          className="rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white hover:bg-blue-600"
          type="submit"
        >
          Надіслати
        </button>
      </form>
    </div>
  </div>, rootModal)
 
);
  }
}

export default Modal;

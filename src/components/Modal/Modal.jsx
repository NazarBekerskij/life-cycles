import { Component } from "react";

class Modal extends Component {
    
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscClose);
  }

  handleEscClose = (event) => {
    if (event.code === "Escape") {
      this.props.closeModal();
    }
  };

  handleBackdropClose = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { closeModal } = this.props;
    return (
      <div
        onClick={this.handleBackdropClose}
        className="fixed top-0 right-0 left-0 bottom-0 bg-green-120 flex justify-center items-center"
      >
        <div className="h-64 w-96 bg-white relative rounded-xl ">
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-4 cursor-pointer"
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;

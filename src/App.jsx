import "./App.css";
import { Component } from "react";

import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import Title from "./components/Title/Title";

class App extends Component {
  state = {
    isModal: false,
    name: "",
  };

  componentDidMount() {
    const userName = localStorage.getItem("name");


    this.setState({
      name: userName || ""
    })
  }

  componentDidUpdate(_, prev) {
    if (prev.name !== this.state.name) {
      localStorage.setItem("name", this.state.name);
    }
  }

  handleName = (text) => {
    this.setState({
      name: text,
    });
  };

  toggleModal = () => {
    this.setState((prev) => ({
      isModal: !prev.isModal,
    }));
  };

  render() {
    const { isModal } = this.state;
    return (
      <>
        {!this.state.name ? <Button openModal={this.toggleModal}/> : null}
        <Title name={this.state.name} />
        {isModal && (
          <Modal closeModal={this.toggleModal} onName={this.handleName} />
        )}
      </>
    );
  }
}

export default App;

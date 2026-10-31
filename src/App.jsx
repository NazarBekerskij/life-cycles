import './App.css'
import { Component } from 'react'

import Modal from './components/Modal/Modal'
import Button from './components/Button/Button'

class App extends Component {
  state = {
    isModal: false
  }

  toggleModal = () => {
    this.setState((prev) => ({
      isModal: !prev.isModal
    }))
  }


  render(){
    const {isModal} = this.state
    return(
      <>
      <Button openModal={this.toggleModal}/>
      {isModal &&  <Modal closeModal={this.toggleModal}/>}
   
      </>
    )
  }
}


export default App

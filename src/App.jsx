import React, { Component } from 'react'
import Modal from './Modal'
import './App.css'

export default class App extends Component {
  state = {
    name: "invisible"
  }
  handleChange =()=>{
    this.setState({ name: this.state.name==="visible"?"invisible":"visible" })
  }
  render() {
    return (
      <div className="app">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="visible" onClick={
      this.handleChange
            }>
              Уведомления
            </button>
          </div>
        </div>

        <Modal name={this.state.name} change = {this.handleChange} />

        
      </div>
    );
  }
}

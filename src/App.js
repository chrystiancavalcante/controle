import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './Ui/NavBar'

class App extends Component {
  render() {
    const logo = 'Controle de Vendas'
    return (
      <div>
        <NavBar logo = {logo}/>
      </div>
    )
  }
}

export default App;

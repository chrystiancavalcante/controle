import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Ui/NavBar';
import Home from './container/Home';
import Clock from './Ui/Clock';

class App extends Component {
  render() {
    const logo = 'Controle de Vendas'
    return (
      <div>
        <NavBar logo = {logo} />
        {this.props.children}
        <div>
        <Clock/>
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Container from './components/Container';
// import Card from './components/Card';
// import Button from './components/Button';
// import { gradients } from './data/gradients';


class App extends Component {
  // state = {
  //   gradients: gradients,
  //   title: 'Pinta y colorea'
  // }


  render() {
    return (
      <div className="App">
        <Header />
        <section>
        <Container>To do</Container>
        <Container>Done</Container>
        </section>
        
      </div>
    );
  }
}

export default App;

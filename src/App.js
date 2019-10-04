import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Container from './components/Container';

import { todo } from './data/todo';
import { done } from './data/done';


class App extends Component {
  state = {
    todo: todo,
    done: done
  }


  render() {
    const { todo, done } = this.state;
    console.log(todo)
    console.log(done)
    return (
      <div className="App">
        <Header />
        <section>
          <Container todo>To do</Container>
          <Container done>Done</Container>
        </section>
        
      </div>
    );
  }
}

export default App;

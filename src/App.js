import React, { Component } from 'react';
import './App.css';
import image from './components/bottom-img.png';

import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';

import { todo } from './data/todo';
import { done } from './data/done';


class App extends Component {
  state = {
    todo: todo,
    done: done
  }

  addATask = () => {
    const { todo } = this.state;
    this.setState({
      todo: [...todo, this.textInput.value]
    })
    this.textInput.value = "";
  }

  markDone = (task) => {
    const todo = this.state.todo.filter(i => i !== task)
    this.setState({todo})
    const { done } = this.state;
    this.setState({
      done: [...done, task]
    })
  } 

  unmark = (task) => {
    const done = this.state.done.filter(i => i !== task)
    this.setState({done})
    const { todo } = this.state;
    this.setState({
      todo: [...todo, task]
    })
  } 

  deleteTodo = (task) => {
    const todo = this.state.todo.filter(i => i !== task)
    this.setState({todo})
  } 
  
  deleteDone = (task) => {
    const done = this.state.done.filter(i => i !== task)
    this.setState({done})
  } 


  render() {
    const { todo, done } = this.state;
    
    return (
      <div className="App">
        <Header />
        <div className="input">          
            <h2>Add a task</h2>
            <p>
			        <input id="new-task" type="text" maxLength="35" ref={(input) => this.textInput = input}></input>
              <Button myProp={this.addATask}>Add</Button>
		        </p>
        </div>   
        <section>
          <div id="todo" className="container">
            <h2>To do</h2>
            <section>
                    
                    {this.state.todo.map((task, index) => {
                      return (
                       <Card key={`${task}-${index}`} text={task} delete={this.deleteTodo.bind(this, task)} check={this.markDone.bind(this, task)} atribute={false}/>
                      )
                    })} 
                                      
                  
            </section>   
          </div>
          <div id="done" className="container">
            <h2>Done</h2>
            <section>
                    
                    {this.state.done.map((task, index) => {
                      return (
                       <Card key={`${task}-${index}`} text={task} delete={this.deleteDone.bind(this, task)} check={this.unmark.bind(this, task)} atribute={true}/>
                      )
                    })} 
                                      
                  
            </section>   
          </div>
          <div>
            <img src={image} className="bottom-img" alt="img" />
          </div>
          
        </section>
        
      </div>
    );
  }
}

export default App;



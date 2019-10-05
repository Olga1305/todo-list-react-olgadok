import React, { Component } from 'react';
import './App.css';

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
      todo: [this.textInput.value, ...todo]
    }, () => {
      console.log('🤣', this.state.todo)
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
    console.log(todo)
    console.log(done)
    return (
      <div className="App">
        <Header />
        <div className="input">          
            <p>Add a task</p>
            <p>
			        <input id="new-task" type="text" ref={(input) => this.textInput = input}></input>
              <Button myProp={this.addATask}>Add</Button>
		        </p>
        </div>   
        <section>
          <div id="todo" className="container">
            <h2>To do</h2>
            <section>
                    
                    {this.state.todo.map((task, index) => {
                      return (
                       <Card key={`${task}-${index}`} text={task} action={this.deleteTodo.bind(this, task)}/>
                      )
                    })} 
                                      
                  
            </section>   
          </div>
          <div id="done" className="container">
            <h2>Done</h2>
            <section>
                    
                    {this.state.done.map((task, index) => {
                      return (
                       <Card key={`${task}-${index}`} text={task} action={this.deleteDone.bind(this, task)}/>
                      )
                    })} 
                                      
                  
            </section>   
          </div>
          
        </section>
        
      </div>
    );
  }
}

export default App;




// handleEmailChange: function(e) {
//   this.setState({email: e.target.value});
// },
// handlePasswordChange: function(e) {
//   this.setState({password: e.target.value});
// },
// render : function() {
//      return (
//        <form>
//          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
//          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
//          <button type="button" onClick={this.handleLogin}>Login</button>
//        </form>);
// },
// handleLogin: function() {
//    console.log("EMail: " + this.state.email);
//    console.log("Password: " + this.state.password);
// }

// ////

// handleSearchTermSubmit(event) {
//   event.preventDefault();
//   this.props.onSearchTermSubmit(this.textInput.value);
// }

// render() {
//     return (
//       <div className="SearchBar">
//         <h1>SearchBar</h1>
//         <form onSubmit={this.handleSearchTermSubmit}>
//           <input type="text" ref={(input) => this.textInput = input} />
//           <button>Search</button>
//           <button type="button">Random (doesn't do anything)</button>
//         </form>
//       </div>
//     );
// }
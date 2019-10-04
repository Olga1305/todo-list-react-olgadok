import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    
    render() {
        return (
          <div className="Header">        
            <div className="title">
              <h1>To do list</h1>
            </div>        
            <div className="input">
             <p>Add a task</p>
             <p>
			 <input id="new-task" type="text"></input><button>Add</button>
		     </p>
            </div>        
        </div>
            
        );
    }
}

export default Header;
import React, { Component } from 'react';
import './Container.css';
import Card from './Card';
import { todo } from '../data/todo';
import { done } from '../data/done';



class Container extends Component { 
    render() {        
        
        let list;
        if (this.props.todo) {
            list = todo;
        }
        if (this.props.done) {
            list = done;
        }

        console.log(list)

        return (
            <div className="Container">
                <h2>{this.props.children}</h2>
                <section>
                    
                    {list.map((card, index) => {
                      return (
                       <Card key={`${card}-${index}`} text={card}/>
                      )
                    })} 
                                      
                  
                </section>              
                
            </div>
        )
    }
}

export default Container;
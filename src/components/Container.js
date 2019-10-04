import React, { Component } from 'react';
import Card from './Card';
import './Container.css';

class Container extends Component {
    render() {
        return (
            <div className="Container">
                <h2>{this.props.children}</h2>
                <section>
                  <Card></Card>
                  <Card></Card>
                  <Card></Card>
                  <Card></Card>
                  <Card></Card>
                  <Card></Card>
                  <Card></Card>
                  
                  
                </section>              
                
            </div>
        )
    }
}

export default Container;
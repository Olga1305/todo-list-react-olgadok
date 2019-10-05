import React, { Component } from 'react';
import './Card.css';
import Button from './Button';


class Card extends Component {
    render() {
        return (
            <div className="Card">
                <p>{this.props.text}</p>
                <input type="checkbox" onClick={this.props.check} checked = {this.props.atribute}></input>
                <Button myProp={this.props.delete}>Delete</Button>                
                
            </div>
        )
    }
}

export default Card;
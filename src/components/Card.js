import React, { Component } from 'react';
import './Card.css';
import Button from './Button';


class Card extends Component {
    render() {
        return (
            <div className="Card">
                <p>{this.props.text}</p>
                <input name="done" type="checkbox"></input>
                <Button myProp={this.props.action}>Delete</Button>                
                
            </div>
        )
    }
}

export default Card;
import React, { Component } from 'react';
import Input from './input';

class Card extends Component {
  render() {
    return (
        <div className="card">
            { Input('What is your favorite NFL team?') }
            {Input('What is your favorite NBA team?')}
        </div>
    )

    
  }
}
export default Card;
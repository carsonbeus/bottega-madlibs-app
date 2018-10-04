import React, { Component } from 'react';
import Header from './header';
import Card from './card';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        { Header() }
        <Card />


      </div>
    );
  }
}


// things we need to fix
// placeholder
// gray and green number labels
// generate button space/card height
// content labels
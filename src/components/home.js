import React, { Component } from 'react';
import Header from './header';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
      { Header() }
      </div>
    );
  }
}

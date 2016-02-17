import React from 'react';

import headerStyles from '../skin/header.scss';


export default React.createClass({
  displayName: 'header',

  getInitialState () {
    return {
      account_name: 'DogTreatsRUs',
      account_avatar: 'http://www.funnydogsite.com/pictures/Lobster_Dog_Is_Mad.jpg'
    }
  },

  render () {
    return (
      <div className='header'>
        <h1>React Insights</h1>
        <ul>
          <li><span>{this.state.account_name}</span></li>
          <li><img src={this.state.account_avatar} alt='account avatar'/></li>
        </ul>
      </div>
    )
  }

})
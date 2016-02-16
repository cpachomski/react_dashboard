import React from 'react';
import d3 from 'd3';

export default React.createClass({
  displayName: 'Chart',



  componentDidMount () {
    console.log('component mounted');



  },

  render () {
    console.log(d3);
    return (
      <div className='chart-container'> Chart </div>
    )
  }
});
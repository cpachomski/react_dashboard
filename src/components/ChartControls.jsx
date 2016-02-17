import React from 'react';


export default React.createClass({
  render () {
    let toggleButtonText = '';
    let splitButtonText = '';

    if (this.props.chartVisible) {
      toggleButtonText = 'Show Chart';
    } else {
      toggleButtonText = 'Hide Chart';
    }

    if (this.props.chartSplit) {
      splitButtonText = 'Show combined';
    } else {
      splitButtonText = 'Show by color';
    }

    return (
      <div className='chart-controls'>
        <button className='chart-toggle'>
          {toggleButtonText}
        </button>

        <button className='chart-split'>
          {splitButtonText}
        </button>
      </div>
    )
  }
})
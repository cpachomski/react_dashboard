import React from 'react';
import d3 from 'd3';
import ChartControls from './ChartControls.jsx';

import chartStyles from '../skin/chart.scss';

export default React.createClass({
  displayName: 'Chart',

  getInitialState () {
    return {
      chartVisible: false,
      chartSplit: false,
    }
  },

  prepChartData (dataList) {

  },

  renderChart () {

  },

  componentDidMount () {
    console.log('component mounted');

  },

  render () {
    console.log(d3);
    return (
      <div className='chart-container'>
        <div className='chart'>

        </div>
        <ChartControls chartVisible={this.state.chartVisible}
                       chartSplit={this.state.chartSplit} />
      </div>
    )
  }
});
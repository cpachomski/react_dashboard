import React from 'react';
import d3 from 'd3';
import ChartControls from './ChartControls.jsx';

import chartStyles from '../skin/chart.scss';

export default React.createClass({
  displayName: 'Chart',

  getInitialState () {
    return {
      chartVisible: true,
      chartSplit: false,
    }
  },

  prepChartData (dataList) {

  },

  renderChart () {
      let testData = [{
          "sale": "202",
          "year": "2000"
      }, {
          "sale": "215",
          "year": "2001"
      }, {
          "sale": "179",
          "year": "2002"
      }, {
          "sale": "199",
          "year": "2003"
      }, {
          "sale": "134",
          "year": "2003"
      }, {
          "sale": "176",
          "year": "2010"
      }];

      let chart = d3.select('#svg-chart');
      let width = 500;
      let height = 300;
      let margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
      }

      let xScale = d3.scale.linear().range([margins.left, width - margins.right]).domain([2000, 2010]);

      let yScale = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([134, 215]);

      let xAxis = d3.svg.axis()
                    .scale(xScale)


      let yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient('left');


      //build Axes
      chart.append('svg:g')
            .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
            .attr('class', 'axis x')
            .call(xAxis);

      chart.append('svg:g')
            .attr('transform', 'translate(' + (margins.left) + ',0)')
            .attr('class', 'axis y')
            .call(yAxis);

  },

  componentDidMount () {
    console.log('chart mounted');
    this.renderChart();

  },

  render () {
    return (
      <div className='chart-container'>
        <div className={this.state.chartVisible ? 'chart visible' : 'chart'}>
          <svg id='svg-chart' width='500' height='500'></svg>

        </div>
        <ChartControls chartVisible={this.state.chartVisible}
                       chartSplit={this.state.chartSplit} />
      </div>
    )
  }
});
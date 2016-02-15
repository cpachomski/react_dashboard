import React from 'react';
import $ from 'jquery';
import Table from './Table.jsx';
import UpdateState from 'react-addons-update';
import Stats from './Stats.jsx';

import DoggyData from  '../doggy_data/DogTreatsRUsData.jsx';

import loadingStyles from '../skin/loading.scss';
import mainStyles from '../skin/main.scss';



const apiHit = 'https://mockaroo.com/e7995d70/download?count=5000&key=015777f0';

const addCustomerHit = 'https://mockaroo.com/e7995d70/download?count=1&key=015777f0';



export default React.createClass({
  displayName: 'dashboard',

  getInitialState () {
    return {
      dataList: []
    }
  },

  componentDidMount () {
     $.get(apiHit, (data) => {
      console.log('data received')
        this.setState({
          dataList: data
        });
        console.log('state updated');
    });
    console.log('api hit completed second');

  },

  addCustomerDatum () {
    let oldDataList = this.state.dataList;
    $.get(addCustomerHit, (newDatum) => {
      //NOT WORKING :(
      console.log(newDatum[0].first_name + ' ' + newDatum[0].last_name);

      oldDataList.push(newDatum);

    });
      this.setState({dataList: oldDataList});
  },

  render () {
    if (this.state.dataList.length < 1){
      return (
        <div className='loader'>
          <span className='splitting-lines'></span>
          <h3> Loading </h3>
        </div>
      )
    }

    return (
      <div className='dashboard'>
        <Stats dataList={this.state.dataList} />
        <Table dataList={this.state.dataList} addCustomerDatum={this.addCustomerDatum}/>
      </div>
    )
  }
})
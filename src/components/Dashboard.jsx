import React from 'react';
import $ from 'jquery';
import Table from './Table.jsx';

import DoggyData from  '../doggy_data/DogTreatsRUsData.jsx';

import loadingStyles from '../skin/loading.scss';
import mainStyles from '../skin/main.scss';



const apiHit = 'https://mockaroo.com/e7995d70/download?count=5000&key=015777f0';



export default React.createClass({
  displayName: 'dashboard',

  getInitialState () {
    return {
      dataList: DoggyData
    }
  },

  render () {

    if (this.state.dataList.length < 1){
      return (
        <div className='loader'>
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
          <h3> Loading </h3>
        </div>
      )
    }

    return (
      <div className='dashboard'>
        <div className='dash-top'></div>
        <Table dataList={this.state.dataList}/>
      </div>
    )
  }
})
import React from 'react';
import $ from 'jquery';
import StatColumn from './StatsColumn.jsx'

import statsStyles from '../skin/stats.scss';


export default React.createClass({
  displayName: 'Stats',


  getInitialState () {
    return {
      totalUsers: this.props.dataList.length,
      totalColors: this.getTotalColors(this.props.dataList),
      malePercentage: this.getGenderPercentage(this.props.dataList, 'Male'),
      femalePercentage: this.getGenderPercentage(this.props.dataList, 'Female'),
      performedSignedUp: this.usersWhoPerformed(this.props.dataList, 'signed_up'),
      performedViewedProfile: this.usersWhoPerformed(this.props.dataList, 'viewed_profile'),
      performedViewedItem: this.usersWhoPerformed(this.props.dataList, 'viewed_item'),
      performedPurchasedItem: this.usersWhoPerformed(this.props.dataList, 'purchased_item'),
    }
  },

  componentDidMount () {

    $('.stats-col').addClass('active');

    this.setState({
      totalUsers: this.props.dataList.length,
      totalColors: this.getTotalColors(this.props.dataList),
      malePercentage: this.getGenderPercentage(this.props.dataList, 'Male'),
      femalePercentage: this.getGenderPercentage(this.props.dataList, 'Female')
    });
  },


  getTotalColors (dataList) {
    let colorsArray = [];
    dataList.forEach( (customerDatum) => {
      if (customerDatum.purchased_item){
        if ( colorsArray.indexOf(customerDatum.purchased_item.color) === -1 & customerDatum.purchased_item.color != undefined) {
          colorsArray.push(customerDatum.purchased_item.color);
        }
      }
    });
    return colorsArray.length
  },

  getGenderPercentage (dataList, gender) {
    let maleTotal = 0;
    let femaleTotal = 0;
    let total = 0;

    dataList.forEach( (customerDatum) => {
      if(customerDatum.gender) {
        if (customerDatum.gender === "Male") {
          total += 1;
          maleTotal += 1;
        } else if (customerDatum.gender === "Female") {
          total += 1;
          femaleTotal += 1;
        } else {
          total += 1;
        }
      }
    });

    if (gender == 'Male') {
      return ((maleTotal / total) * 100) + '%';
    } else if ( gender == 'Female') {
      return ((femaleTotal / total) * 100) + '%';
    }  else {
      return;
    }
  },

  usersWhoPerformed (dataList, eventString) {
    let total = 0;

    dataList.forEach( (customerDatum) => {
      if (customerDatum[eventString] && customerDatum[eventString] != undefined) {
        total += 1;
      }
    })
    return total;
  },



  //can accept any number of events to order for conversion percentage
  conversionPercentage(dataList) {
    let args = Array.prototype.slice.call(arguments);
    //start with original time
    let numberOfOccurences = 0;


    dataList.forEach( (customerDatum, customerIndex) => {
      let eventSuccesses = 0;
      let timeTracker = new Date();
      if (customerIndex < 10) {

        args.forEach( (arg, idx) => {
          //set date to first event if that happens
          if (idx === 1 && customerDatum[arg] ){
            timeTracker = new Date(customerDatum[arg].date);

          }
          if (idx === 2 && customerDatum[arg]) {
           if( customerDatum[arg].date && customerDatum[arg].date != undefined) {
              let eventDate = new Date(customerDatum[arg].date);
              console.log(eventDate, 'eventDate');
              console.log(timeTracker, 'timeTracker');
              if (eventDate > timeTracker) {
                timeTracker = eventDate;
                eventSuccesses += 1;
              }
            }
          }
        });
      }

      if (eventSuccesses > (args.length - 2)){

        numberOfOccurences += 1;
      }

    });
    console.log(numberOfOccurences);
  },



  render () {


    return (
      <div className='stats'>
        <h3> stats </h3>
        <div className='cols-container'>
          <div className='stats-col col-1' onClick={this.handleClick}>
            <p><span>Total Users:</span> {this.state.totalUsers}</p>
            <p><span>Total Colors:</span> {this.state.totalColors}</p>
            <p><span>Perfcent of Females:</span> {this.state.femalePercentage}</p>
            <p><span>Percent of Males:</span> {this.state.malePercentage} </p>
          </div>
          <div className='stats-col col-2'>
            <p><span>Total Users who performed a "signed_up":</span> {this.state.performedSignedUp}</p>
            <p><span>Total Users who performed a "viewed_profile":</span> {this.state.performedViewedProfile}</p>
            <p><span>Total Users who performed a "viewed_item":</span> {this.state.performedViewedItem}</p>
            <p><span>Total Users who performed a "purchased_item":</span> {this.state.performedPurchasedItem}</p>
          </div>
          <div className='stats-col col-3'>
            <p><span>Conversion from Signup -> Purchase:</span> {this.state.signed_up_to_purchased_item}</p>
            <p><span>Conversion from Signup -> Viewed Profile -> Purchase:</span> {this.state.signed_up_to_purchased_item}</p>
            <p><span>Conversion from Signup -> Viewed Item -> Purchase:</span> {this.state.signed_up_to_purchased_item}</p>
          </div>
        </div>
      </div>
    )
  }

});

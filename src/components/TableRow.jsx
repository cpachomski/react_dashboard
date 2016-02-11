 import React from 'react';


 export default React.createClass({
  displayName: 'table-row',

  render () {

    return (
      <div className='row'>
        <span className='first-name'>{this.props.firstName}</span>
        <span className='last-name'>{this.props.lastName}</span>
        <span className='gender'>{this.props.gender}</span>
        <span className='company-name'>{this.props.companyName}</span>
        <span className='job-title'>{this.props.jobTitle}</span>
        <span className='user-id'>{this.props.id}</span>
      </div>
    )
  }

 });
import React from 'react';
import TableRow from './TableRow.jsx';

import tabelStyles from '../skin/table.scss';


export default React.createClass({
  displayName: 'data-table',


  render () {
    return (
      <div className='table'>
        <TableRow className='header-row'
                  firstName="First Name"
                  lastName="Last Name"
                  gender="Gender"
                  companyName="Company"
                  jobTitle="Job Title"
                  id="ID" />

          {this.props.dataList.map( (customerDatum) => {
            return(
              <TableRow key={customerDatum.id} className='body-row'
                  firstName={customerDatum.first_name ? customerDatum.first_name : 'N/A'}
                  lastName={customerDatum.last_name ? customerDatum.last_name : 'N/A'}
                  gender={customerDatum.gender ? customerDatum.gender : 'N/A'}
                  companyName={customerDatum.company_name ? customerDatum.company_name : 'N/A'}
                  jobTitle={customerDatum.job_title ? customerDatum.job_title : 'N/A'}
                  id={customerDatum.id ? customerDatum.id : 'N/A'}/>
            )
          })}
      </div>
    )
  }

})
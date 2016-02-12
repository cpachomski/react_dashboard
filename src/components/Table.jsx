import React from 'react';
import Immutable from 'immutable';
import TableRow from './TableRow.jsx';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import $ from 'jquery';


import tabelStyles from '../skin/table.scss';



export default React.createClass({
  displayName: 'data-table',
  mixins: [PureRenderMixin],

  getInitialState () {
    return {
      dataList: Immutable.List(),
      filteredData: Immutable.List()
    }
  },

  componentWillMount () {
    this.setState({
      dataList: Immutable.fromJS(this.props.dataList).toList(),
      filteredData: Immutable.fromJS(this.props.dataList).toList()
    });
  },

  filterData (e) {
    e.preventDefault();
    console.log('filter run');
    const regex = new RegExp(e.target.value, 'i');
    const filtered = this.state.dataList.filter( (customerDatum) => {
      return (customerDatum.get('first_name').search(regex) > -1);
    });
    this.setState({
      filteredData: filtered
    });
  },


  render () {

    const displayRows = this.state.filteredData.map( (customerDatum) => {
      return (
        <TableRow key={customerDatum.get('id')} className='body-row'
            firstName={customerDatum.get('first_name') ? customerDatum.get('first_name') : 'N/A'}
            lastName={customerDatum.get('last_name') ? customerDatum.get('last_name') : 'N/A'}
            gender={customerDatum.get('gender') ? customerDatum.get('gender') : 'N/A'}
            companyName={customerDatum.get('company_name') ? customerDatum.get('company_name') : 'N/A'}
            jobTitle={customerDatum.get('job_title') ? customerDatum.get('job_title') : 'N/A'}
            id={customerDatum.get('id') ? customerDatum.get('id') : 'N/A'}/>
      );
    });

    return (
      <div className='table-container'>
        <input
          type='text'
          className='table-search'
          onChange={this.filterData}
          placeholder="Search" />

        <button onClick={this.props.addCustomerDatum}> Add Row </button>

        <div className='table'>
          <TableRow className='header-row'
                    firstName="First Name"
                    lastName="Last Name"
                    gender="Gender"
                    companyName="Company"
                    jobTitle="Job Title"
                    id="ID" />

            {displayRows}
        </div>
      </div>


    )
  }

})
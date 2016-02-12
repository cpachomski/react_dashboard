import React from 'react';



export default React.createClass({


  render () {

    let col1 = function(){
      return (
          <ul>
          <li><span>Total Users:</span> {this.state.totalUsers}</li>
          <li><span>Total Colors:</span> {this.state.totalColors}</li>
          <li><span>Perfcent of Females:</span> {this.state.femalePercentage}</li>
          <li><span>Percent of Males:</span> {this.state.malePercentage} </li>
        </ul>
        )
    }


      return (
        <div className='stats-col' onClick={this.handleClick}>
          {col1}
        </div>
      )


  }

})
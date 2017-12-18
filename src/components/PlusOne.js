import React, { Component } from 'react';
import varPrincipalData from '../data/principalData'

class PlusOne extends Component{
  render(){
    return(
      <div>
          <button onClick = {function(){varPrincipalData.rise()}}>plusOne</button>
      </div>
    );
  };

}

export default PlusOne;

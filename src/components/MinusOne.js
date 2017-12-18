import React, { Component } from 'react';
import varPrincipalData from '../data/principalData'

class MinusOne extends Component{
  render(){
    return(
      <div>
          <button onClick = {function(){varPrincipalData.decrement()}}>MinusOne</button>
      </div>
    );
  };

}

export default MinusOne;

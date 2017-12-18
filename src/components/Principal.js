import React, { Component } from 'react';
import varPrincipalData from '../data/principalData';
import PlusOne from './PlusOne';
import MinusOne from './MinusOne';
import { observer } from 'mobx-react';

class Principal extends Component{
  render(){
    return(
      <div>
        <h2>Saludos desde principal</h2>
        <h2>{varPrincipalData.numero}</h2>
        <PlusOne/>
        <MinusOne/>
      </div>
    );
  };

}

export default observer(Principal);

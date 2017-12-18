import {extendObservable} from 'mobx';

class PrincipalData {
  constructor() {
    extendObservable(this, {numero: 0});
  }

  rise() {
    this.numero = this.numero + 1;
  }
  decrement() {
    this.numero = this.numero - 1;
  }
}

var varPrincipalData = new PrincipalData;

export default varPrincipalData;

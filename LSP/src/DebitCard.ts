import NubankCard from './NubankCard';

export default class DebitCard extends NubankCard {
  validate(): void {
      console.log("Verificando se ha saldo");
      
  }
}
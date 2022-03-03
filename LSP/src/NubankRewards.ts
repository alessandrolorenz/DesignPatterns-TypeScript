import IPaymentInstrument from './IPaymentInstrument';

export default class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log("Verificando pontos");
    
  }
  collectPayment(): void {
    console.log("Pagamento realizado nubankRewards");
  }
  
}
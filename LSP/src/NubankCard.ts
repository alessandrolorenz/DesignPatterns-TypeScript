import IPaymentInstrument from './IPaymentInstrument';

export default abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log("validação basica Nubank");
    
  }
  collectPayment(): void {
    console.log("Pagamento realizado Nubank");
    
  }
}
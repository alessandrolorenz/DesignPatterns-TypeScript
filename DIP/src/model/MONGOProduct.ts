import IDbProduct from './IDbProduct';

export default class MONGOProduct implements IDbProduct {
  getProductById(productId: number): string {
    return "MONGO produto " + productId
    
  }
}
import IDbProduct from './IDbProduct';

export default class MySQLProduct implements IDbProduct {
  getProductById(productId: number): string {
    return "MYSQL produto " + productId
    
  }
}
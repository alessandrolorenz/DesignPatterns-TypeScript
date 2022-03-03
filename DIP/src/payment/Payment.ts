import MySQLProduct from '../model/MySQLProduct'

export default class Payment {

  pay(productId: number): void {
    const dbProduct = new MySQLProduct()
    const product = dbProduct.getProductById(productId)
    console.log(product)
  }
  verify(): void {};
}
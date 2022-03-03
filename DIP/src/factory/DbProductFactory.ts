import Db from '../model/Db';
import IDbProduct from '../model/IDbProduct';
import MONGOProduct from '../model/MONGOProduct';
import MySQLProduct from '../model/MySQLProduct';

export default class DbProductFactory {
  public static create(dbType: Db): IDbProduct {
    if(dbType === Db.MYSQL) {
      return new MySQLProduct()
    } else if(dbType === Db.MONGODB) {
      return new MONGOProduct()
    } else {
      throw new Error("não implementado")
    }
  }
}
import IVehicle from './IVehicle';

export default class Motorccycle implements IVehicle {
  constructor(
    color: string,
     year: number, 
     engine: number, 
  ) {
    this.configurationMotorcycle(color, year, engine)
  }
  startVehicle(): void {
    console.log("Start vehicle");
    ;
  }
  configurationCar(color: string, year: number, engine: number, seat: number): void {
    throw new Error('Method not implemented.');
  }
  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(color, year, engine);
    this.startVehicle();
  }

}
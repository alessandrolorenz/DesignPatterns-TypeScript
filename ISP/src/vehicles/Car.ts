import IVehicle from './IVehicle';

export default class Car implements IVehicle {
  constructor(
    color: string,
     year: number, 
     engine: number, 
     seat: number
  ) {
    this.configurationCar(color, year, engine, seat)
  }
  startVehicle(): void {
    console.log("Start vehicle");
    ;
  }
  configurationCar(color: string, year: number, engine: number, seat: number): void {
    console.log(color, year, engine, seat);
    this.startVehicle();
  }
  configurationMotorcycle(color: string, year: number, engine: number): void {
    throw new Error('Method not implemented.');
  }

}
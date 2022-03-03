import IVehicleCar from './IVehicleCar';

export default class Car implements IVehicleCar {
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
}
import IVehicle from './IVehicle';
import IVehicleMotorcycle from './IVehicleMotorcycle';

export default class Motorccycle implements IVehicleMotorcycle, IVehicle{
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
  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(color, year, engine);
    this.startVehicle();
  }

}
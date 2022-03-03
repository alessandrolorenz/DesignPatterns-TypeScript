import IVehicle from './IVehicle';

// esta maneira a interface não extende, mas a classe motorcicle implementara ambas as intetrfaces: export default class Motorccycle implements IVehicleMotorcycle, IVehicle
export default interface IVehicleMotorcycle {
  configurationMotorcycle(color: string, year: number, engine: number): void;
}
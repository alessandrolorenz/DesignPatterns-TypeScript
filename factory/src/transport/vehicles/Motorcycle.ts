import Ivehicle from './interfaces/IVehicle';

export default class Motorcycle implements Ivehicle {
  startRoute(): void {
    this.getCargo()
    console.log("Start delivery");
  }

  getCargo(): void {
    console.log("Getting cargo.");
  }

}
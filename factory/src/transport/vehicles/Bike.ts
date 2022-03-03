import Ivehicle from './interfaces/IVehicle';

export default class Bike implements Ivehicle {
  startRoute(): void {
    this.getCargo()
    console.log("Start delivery");
  }

  getCargo(): void {
    console.log("Getting food.");
  }

}
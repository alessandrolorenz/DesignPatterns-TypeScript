import Ivehicle from './interfaces/IVehicle';

export default class Car implements Ivehicle {
  startRoute(): void {
    this.getCargo()
    console.log("Start trip");
    
  }
  getCargo(): void {
    console.log("Getting passagers.");
    
  }

}
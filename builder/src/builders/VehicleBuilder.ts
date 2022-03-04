import Engine from '../components/Engine';
import Transmition from '../components/Transmition';
import VehicleType from '../components/VehicleType';
import Wheel from '../components/Wheel';
import Vehicle from '../products/Vehicle';
import Ibuilder from './IBuilder';

export default class VehicleBuilder implements Ibuilder {
  private vehicle = new Vehicle();
  reset(): void {
    this.vehicle = new Vehicle();
  }
  getVehicle(): Vehicle {
    const result: Vehicle = this.vehicle;
    this.reset();
    return result;
  }
  addWheel(wheel: Wheel) {
    this.vehicle.addWeel(wheel);
  }
  setVehicleType(value: VehicleType) {
    this.vehicle.vehicleType = value;
  }
  setSeats(seats: number) {
    this.vehicle.seats = seats;
  }
  setEngine(engine: Engine) {
    this.vehicle.engine = engine;
  }
  setTransmition(transition: Transmition) {
    this.vehicle.transmition = transition;
  }

}
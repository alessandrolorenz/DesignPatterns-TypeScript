import Engine from '../components/Engine';
import Transmition from '../components/Transmition';
import VehicleType from '../components/VehicleType';
import Wheel from '../components/Wheel';
import Vehicle from '../products/Vehicle';

export default interface Ibuilder {
  reset(): void;
  getVehicle(): Vehicle;

  addWheel(wheel: Wheel);
  setVehicleType(value: VehicleType);
  setSeats(seats: number);
  setEngine(engine: Engine);
  setTransmition(transition: Transmition)


}
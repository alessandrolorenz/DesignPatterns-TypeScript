import Engine from '../components/Engine';
import Transmition from '../components/Transmition';
import VehicleType from '../components/VehicleType';
import Wheel from '../components/Wheel';

export default class Vehicle {

  private _vehicleType: VehicleType;
  private _seats: number;
  private _engine: Engine;
  private _transmition: Transmition;
  private _weels: Wheel[] = []

  addWeel(wheel: Wheel) {
    this._weels.push(wheel);
  }

  get wheels(): Wheel[] {
    return this._weels;
  }
  get WheelsTotal(): number {
    return this._weels.length
  }

  get vehicleType(): VehicleType {
    return this._vehicleType;
  }
  set vehicleType(value: VehicleType) {
    this._vehicleType = value
  }

  get seats(): number {
    return this._seats;
  }
  set seats(value: number) {
    this._seats = value
  }

  get engine(): Engine {
    return this._engine;
  }
  set engine(value: Engine) {
    this._engine = value
  }

  get transmition(): Transmition {
    return this._transmition;
  }
  set transmition(value: Transmition) {
    this._transmition = value
  }

}
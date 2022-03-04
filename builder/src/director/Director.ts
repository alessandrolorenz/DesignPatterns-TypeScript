import Ibuilder from '../builders/IBuilder';
import Engine from '../components/Engine';
import Transmition from '../components/Transmition';
import VehicleType from '../components/VehicleType';
import Wheel from '../components/Wheel';

export default class Director {
  constructor(private builder: Ibuilder) {

  }

  constructSedanCar() {
    this.builder.setVehicleType(VehicleType.SEDAN);
    this.builder.setSeats(5);
    this.builder.setTransmition(Transmition.AUTOMATIC);
    this.builder.setEngine(new Engine(1700));
    this.builder.addWheel(new Wheel(17));
    this.builder.addWheel(new Wheel(17));
    this.builder.addWheel(new Wheel(17));
    this.builder.addWheel(new Wheel(17));
  }
  constructTruck() {
    this.builder.setVehicleType(VehicleType.TRUCK);
    this.builder.setSeats(5);
    this.builder.setTransmition(Transmition.AUTOMATIC_SEQUENTIAL);
    this.builder.setEngine(new Engine(13000));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
  }
  constructMotorcycle() {
    this.builder.setVehicleType(VehicleType.MOTORCYCLE);
    this.builder.setSeats(1);
    this.builder.setTransmition(Transmition.MANUAL);
    this.builder.setEngine(new Engine(1200));
    this.builder.addWheel(new Wheel(20));
    this.builder.addWheel(new Wheel(20));

  }
}
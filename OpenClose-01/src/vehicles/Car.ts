import InterfaceVehicleCar from './InterfaceVehicleCar'
export default class Car implements InterfaceVehicleCar {
  color: string;
  year: number;
  engine: string;
  seats: number;
  doors: number;
  constructor(
    color: string,
    year: number,
    engine: string,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors)
  }
  startVeihicle(): void {
    console.log("Car starts");
  }
  configure(color: string, year: number, engine: string, seats: number, doors: number): void {
    console.log(color, year, engine, seats, doors);
    this.color = color
    this.year = year
    this.engine = engine
    this.seats = seats
    this.doors = doors
    this.startVeihicle()
  }
}
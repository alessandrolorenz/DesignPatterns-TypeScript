import InterfaceVehicleMotorcycle from './InterfaceVehicleMotorcycle'
export default class Motorcycle implements InterfaceVehicleMotorcycle {
  private color: string
  private year: number
  private engine: string
  constructor(
    color: string,
    year: number,
    engine: string,

  ) {
    this.configure(color, year, engine)

  }
  startVeihicle(): void {
    console.log("Moto starts");
  }
  configure(color: string, year: number, engine: string): void {
    console.log(color, year, engine);
    this.color = color
    this.year = year
    this.engine = engine
    this.startVeihicle()
  }
}
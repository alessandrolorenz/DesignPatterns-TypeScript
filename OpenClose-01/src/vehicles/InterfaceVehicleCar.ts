export default interface IterfaceVehicleCar {
  startVihicle(): void,
  configure(
    color: string,
    year: number,
    engine: string,
    seats: number,
    doors: number
  ):void
}
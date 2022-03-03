export default interface IVehicle {
  startVehicle(): void;
  configurationCar(color: string, year: number, engine: number, seat: number): void;
  configurationMotorcycle(color: string, year: number, engine: number): void;
}
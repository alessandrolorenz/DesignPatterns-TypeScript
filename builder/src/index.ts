import VehicleBuilder from './builders/VehicleBuilder';
import Director from './director/Director';
import Vehicle from './products/Vehicle';

const builder: VehicleBuilder = new VehicleBuilder()
const director: Director = new Director(builder)

director.constructSedanCar()

const sedan: Vehicle = builder.getVehicle()

console.log(sedan);
console.log(sedan.WheelsTotal);

director.constructMotorcycle()

const bike: Vehicle = builder.getVehicle()

console.log(bike);
console.log(bike.WheelsTotal);
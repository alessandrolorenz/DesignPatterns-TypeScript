import BikeTransport from './transport/BikeTransport';
import CarTransport from './transport/CarTransport';
import MotorcycleTransport from './transport/MotorcycleTransport';
import Transport from './transport/Transport';

declare var process;

let transport: Transport;

// npm run dev -- --log
// npm run dev -- --uber
if(process.argv.includes("--uber")) {
  transport = new CarTransport()
} else if(process.argv.includes("--log")) {
  transport = new MotorcycleTransport()
} else if(process.argv.includes("--eats")) {
  transport = new BikeTransport()
} else {
  console.log("Selecione o transporte");
}

if(transport) {
  transport.startTransport()
}

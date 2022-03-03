import Client from './Clients';
import Notify from './Notify';

const client =  new Client();
console.log(client);
client.create("Cliente 01", "")
const notify = new Notify(client);
notify.sendEmail(client.read().email)
client.update("Bla", "email")
notify.sendEmail(client.read().email)
client.read()
client.update("Cliente 01 updated", "",33)
console.log(client);

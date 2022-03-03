import Client from './Clients';

export default class Notify {
  constructor(private client: Client) {

  }
  sendEmail(email: string): boolean {
    console.log(email ? email : "sem email");
    console.log(this.client);
// somente teste   
    return true
  }
}
export default class Engine {
  // _ underline é usado para indicar classe que necessita de gettere setter
  constructor(private _power: number) { }
  get power(): number {
    return this._power;
  }
  set power(power: number) {
    this._power= power;
  }
}
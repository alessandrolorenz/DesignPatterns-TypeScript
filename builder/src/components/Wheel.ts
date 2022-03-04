export default class Wheel {
  // _ underline é usado para indicar classe que necessita de gettere setter
  constructor(private _rim: number) { }
  get rim(): number {
    return this._rim;
  }
  set rim(rim: number) {
    this._rim = rim;
  }
}
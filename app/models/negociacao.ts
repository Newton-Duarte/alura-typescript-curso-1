export class Negociacao {
  constructor(
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ) {}

  public get data(): Date {
    return new Date(this._data.getTime());
  }

  public get volume(): number {
    return this.quantidade * this.valor;
  }
}
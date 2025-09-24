export interface ProductProps {
  uuid: string;
  name: string;
  price: number;
  createAt: Date;
}

export class Product {
  private _props: ProductProps;

  constructor(props: ProductProps) {
    this._props = props;
  }

  public getProps(): ProductProps {
    return this._props;
  }
  public getName(): string {
    return this._props.name;
  }
  public getPrice(): number {
    return this._props.price;
  }
  public getCreateAt(): Date {
    return this._props.createAt;
  }
}

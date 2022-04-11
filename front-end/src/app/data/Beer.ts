import { Houblon, Malt, Other } from './interfaces';

export class Beer {
  public beers(): void {}
  id: number = 0;
  name: string = '';
  houblon: Array<Houblon> = [];
  malts: Array<Malt> = [];
  other?: Array<Other> = [];
  price: number = 0;
  etiquette: string = '';
}

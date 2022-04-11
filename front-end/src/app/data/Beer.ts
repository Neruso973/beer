import { Houblon, Malt, Other } from './interfaces';

export class Beer {
  public beers(): void {}
  id: number = 0;
  name: string = '';
  type: string = '';
  houblon: Array<Houblon> = [];
  malts: Array<Malt> = [];
  other?: Array<Other> = [];
  levure: string = '';
  price: number = 0;
  etiquette: string = '';
}

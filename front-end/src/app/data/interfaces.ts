export interface beers {
  id: number;
  name: string;
  houblon: Array<Houblon>;
  malts: Array<Malt>;
  other?: Array<Other>;
  price: number;
  etiquette: string;
}

export interface Houblon {
  name: string;
  origin: string;
  quantity: number;
}

export interface Malt {
  name: string;
  origin: string;
  quantity: number;
}

export interface Other {
  name: string;
  quantity: number;
  unity: string;
}

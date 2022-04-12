export interface beers {
  id: number;
  name: string;
  type: string;
  houblon: Houblon[];
  malts: Array<Malt>;
  other?: Array<Other>;
  levure: string;
  price: number;
  etiquette: string;
}

export interface Houblon {
  id: number;
  name: string;
  origin: string;
  quantity: number;
  timer: number;
}

export interface Malt {
  id: number;
  name: string;
  origin: string;
  quantity: number;
}

export interface Other {
  id: number;
  name: string;
  quantity: number;
  unity: string;
}

export interface Levure {
  id: number;
  name: string;
}

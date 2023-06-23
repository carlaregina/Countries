export interface Countries {
  altSpellings: [];
  area: number;
  borders: [];
  capital: [];
  capitalInfo: CapitalInfo;
  car: Car;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: CoatOfArms;
  continents: [];
  currencies: Currencies;
  demonyms: Demonyms;
  fifa: string;
  flag: string;
  flags: Flags;
  gini: Gini;
  idd: Idd;
  languages:Languages;
  latlng: [];
  maps: Maps;
  name: Name;
  population: number;
  postalCode:PostalCode;
  region:string;
  startOfWeek:string;
  status:string;
  subregion:string;
  timezones:[];
  tld:[];
  translations:Translations;
  unMember:boolean;

}

export interface CapitalInfo {
  latlng: [];
}

export interface Car {
  side: string;
  signs: [];
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currencies {
  JOD: Jod;
}

export interface Jod {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: DemonymsObj;
  fra: DemonymsObj;
}

export interface DemonymsObj {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Gini {
  '2010': number;
}

export interface Idd {
  root: string;
  suffixes: []
  independent:boolean
  landlocked:boolean
}

export interface Languages {
  ara: string
}

export interface Maps{
  googleMaps:string;
  openStreetMaps:string
}

export interface Name {
  common:string
  nativeName: NativeName
  official:string
}

export interface NativeName{
  ara: Ara
}
export interface Ara {
  common:string
  official:string
}
export interface PostalCode {
  format:string
  regex:string
}
export interface Translations {
  ara:Ara
  bre:Ara
  ces:Ara
  cym:Ara
  deu:Ara
  est:Ara
  fin:Ara
  fra:Ara
  hrv:Ara
  hun:Ara
  ita:Ara
  jpn:Ara
  kor:Ara
  nld:Ara
  per:Ara
  pol:Ara
  por:Ara
  rus:Ara
  slk:Ara
  spa:Ara
  srp:Ara
  swe:Ara
  tur:Ara
  urd:Ara
  zho:Ara
}




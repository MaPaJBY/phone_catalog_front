export interface IProductDescription {
  title: string;
  text: string[];
}

export interface IProductDetails {
  id: string;
  namespaceId: string;
  name: string;
  category: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: IProductDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
  price: number;
}

export interface ICartProduct {
  id: string;
  name: string;
  image: string;
  price: number;
}

export enum Icons {
  LOGO = 'logo-icon',
  HEART = 'Heart-icon',
  HEART_FILL = 'Heart-icon-fill',
  CART = 'Cart',
  ARROW_LEFT = 'Arrow-left',
  ARROW_RIGHT = 'Arrow-right',
  ARROW_BOTTOM = 'Arrow-down',
  ARROW_TOP = 'Arrow-up',
  HOME = 'Home',
  SEARCH = 'Search',
  MINUS = 'Minus',
  PLUS = 'Plus',
  CLOSE = 'Close',
  BURGER = 'Burger',
}

export enum SortType {
  AZ = 'az',
  ZA = 'za',
  LOW_TO_HIGH = 'lowToHigh',
  HIGH_TO_LOW = 'highToLow',
  ALL = 'All',
  NORMAL = 'Normal',
  WITHOUT_SORT = 'WithoutSort',
}

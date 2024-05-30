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
  year: number;
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
  NORMAL = 'Normal',
  WITHOUT_SORT = 'WithoutSort',
}

export interface ProductT {
  id: number;
  category: 'phones' | 'tablets' | 'accessories';
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export enum SortType {
  AZ = 'az',
  ZA = 'za',
  LOW_TO_HIGH = 'lowToHigh',
  HIGH_TO_LOW = 'highToLow',
  WITHOUT_SORT = 'without-sort',
  SHOW_ALL = 'show-all',
  NEWEST_TO_OLDEST = 'newest-to-oldest',
  OLDEST_TO_NEWEST = 'oldest-to-newest',
}

export const SHOW_ALL_PRODUCTS = 'show-all-products';

export const convertToProductDetails = (product: ProductT): IProductDetails => {
  return {
    id: product.itemId,
    namespaceId: '',
    name: product.name,
    category: product.category,
    capacityAvailable: [product.capacity],
    capacity: product.capacity,
    priceRegular: product.fullPrice,
    priceDiscount: product.price,
    colorsAvailable: [product.color],
    color: product.color,
    images: [product.image],
    description: [],
    screen: product.screen,
    resolution: '',
    processor: '',
    ram: product.ram,
    camera: '',
    zoom: '',
    cell: [],
    year: product.year,
  };
};

export const convertToProductT = (product: IProductDetails): ProductT => {
  const category =
    product.category === 'phones' ||
    product.category === 'tablets' ||
    product.category === 'accessories'
      ? product.category
      : 'phones';

  return {
    id: parseInt(product.id),
    category,
    itemId: product.id,
    name: product.name,
    fullPrice: product.priceRegular,
    price: product.priceDiscount,
    screen: product.screen,
    capacity: product.capacity,
    color: product.color,
    ram: product.ram,
    year: 0,
    image: product.images[0],
  };
};

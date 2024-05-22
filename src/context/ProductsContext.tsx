import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ICartProduct, IProductDetails } from '../types';

interface IProductsContext {
  phones: IProductDetails[];
  isItemInCart: (productId: string) => boolean;
  addItem: (product: ICartProduct) => void
}

export const ProductsContext = createContext<IProductsContext>({
  phones: [],
  isItemInCart: () => false,
  addItem: (_product: ICartProduct) => {},
});

interface ICartItem {
  count: number;
  product: ICartProduct;
}
type CartItems = {
  [key: string]: ICartItem;
};

interface Props {
  children: React.ReactNode;
}

export const ProductsProvider: FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<IProductDetails[]>([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  const CART_STORAGE_KEY = 'cart_catalog';

  const [cartItems] = useState<CartItems>(() => {
    const item = localStorage.getItem(CART_STORAGE_KEY);

    return item ? JSON.parse(item) : {};
  });

  const isItemInCart = (id: string) => !!cartItems[id];

  const addItem = (product: ICartProduct) => {
    setCartItems((prevCartItems) => {
      const prevProduct = prevCartItems[product.id];

      return {
        ...prevCartItems,
        [product.id]: prevProduct
          ? { ...prevProduct, count: prevProduct.count + 1 }
          : { product, count: 1 },
      };
    });
  };

  useEffect(() => {
    fetch('/api/phones.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {
        setPhones(data);
        setLoading(false);
        // eslint-disable-next-line no-console
        console.log(data);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ProductsContext.Provider
      value={{
        phones,
        isItemInCart,
        addItem
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = (): IProductsContext => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      'useProductsContext must be used within a ProductsProvider',
    );
  }

  return context;
};

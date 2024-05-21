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
}

export const ProductsContext = createContext<IProductsContext>({
  phones: [],
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

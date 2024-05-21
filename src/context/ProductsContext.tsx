<<<<<<< Updated upstream
import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { IProductDetails } from '../types';
=======
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ICartProduct, IProductDetails } from '../types';
>>>>>>> Stashed changes

interface IProductsContext {
  phones: IProductDetails[];
}

export const ProductsContext = createContext<IProductsContext>({
  phones:[]
});

<<<<<<< Updated upstream
=======
interface ICartItem {
  count: number;
  product: ICartProduct;
}
type CartItems = {
  [key: string]: ICartItem;
};

>>>>>>> Stashed changes
interface Props {
  children: React.ReactNode;
}

export const ProductsProvider: FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<IProductDetails[]>([])
  const [_loading, setLoading] = useState(true);
  const [_error, setError] = useState(null);

<<<<<<< Updated upstream
=======
  const [cartItems, setCartItems] = useState<CartItems>(() => {
    const item = localStorage.getItem(CART_STORAGE_KEY);

    return item ? JSON.parse(item) : {};
  });
>>>>>>> Stashed changes

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
        console.log(data)
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

<<<<<<< Updated upstream
=======
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

>>>>>>> Stashed changes
  return (
    <ProductsContext.Provider
      value={{
        phones
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

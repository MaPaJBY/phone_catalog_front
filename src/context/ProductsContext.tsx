import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IProductDetails } from '../types';

interface IProductsContext {
  phones: IProductDetails[];
}

export const ProductsContext = createContext<IProductsContext>({
  phones: [],
});

interface Props {
  children: React.ReactNode;
}

export const ProductsProvider: FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<IProductDetails[]>([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

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

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import PhonesPage from './components/PhonesPage/PhonesPage';
import HomePage from './components/HomePage/HomePage';
import CartPage from './components/CartPage/CartPage';
import ProductPage from './components/pages/productPage/ProductPage';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="phones">
          <Route index element={<PhonesPage />} />
          <Route
            path=":productId"
            element={<ProductPage productType={'phone'} />}
          />
        </Route>
        <Route path="cart" element={<CartPage />} />

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  </Router>
);

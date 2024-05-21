import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout/Layout';
import PhonesPage from './Components/PhonesPage/PhonesPage';
import HomePage from './Components/HomePage/HomePage';
import CartPage from 'Components/CartPage/CartPage';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="phones" element={<PhonesPage />} />
        <Route path="cart" element={<CartPage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  </Router>
);

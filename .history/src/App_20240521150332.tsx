import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import PhonesPage from './components/PhonesPage/PhonesPage';
import HomePage from './components/HomePage/HomePage';
import CartPage from './components/CartPage/CartPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);

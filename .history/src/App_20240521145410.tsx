import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
<<<<<<< HEAD
import PhonesPage from './components/PhonesPage/PhonesPage';
import HomePage from './components/HomePage/HomePage';
import CartPage from './components/CartPage/CartPage';
=======
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
>>>>>>> dca71fd (Added NotFoundPage)

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
<<<<<<< HEAD
        <Route index element={<HomePage />} />
        <Route path="phones" element={<PhonesPage />} />
        <Route path="cart" element={<CartPage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
=======
        <Route path="*" element={<NotFoundPage />} />
>>>>>>> dca71fd (Added NotFoundPage)
      </Route>
    </Routes>
  </Router>
);

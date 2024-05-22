import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
<<<<<<< HEAD
import PhonesPage from './components/PhonesPage/PhonesPage';
import HomePage from './components/HomePage/HomePage';
=======
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
>>>>>>> feature/not-found-page

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="phones" element={<PhonesPage />} />=
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  </Router>
);

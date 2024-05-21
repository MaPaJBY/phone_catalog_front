import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import {NotFoundPage  from './components/NotFoundPage/NotFoundPage';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);

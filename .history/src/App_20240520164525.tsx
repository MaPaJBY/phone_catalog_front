import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);

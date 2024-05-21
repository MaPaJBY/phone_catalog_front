import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import { Header } from './Components/Header/Header';

export const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  </Router>
);

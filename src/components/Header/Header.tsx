import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

import favoriteIcon from './icons/favoriteIcon.png';
import cartIcon from './icons/cart.png';
import iconOk from './icons/logo-ok.png';
import burger from './icons/burger.png';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={iconOk} alt="logo" />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navlinks}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/phones">Phones</NavLink>
          </li>
          <li>
            <NavLink to="/tablets">Tablets</NavLink>
          </li>
          <li>
            <NavLink to="/accessories">Accessories</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.icons}>
        <img
          className={styles.favoriteIcon}
          src={favoriteIcon}
          alt="favorite"
        />
        <img className={styles.cartIcon} src={cartIcon} alt="cart" />
        <div className={styles.burger}>
          <img src={burger} alt="burger" />
        </div>
      </div>
    </header>
  );
};

export default Header;

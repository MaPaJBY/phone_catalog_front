import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import Icon from 'components/Icon';
import { Icons } from 'types';
import logoForHeader from './logoForHeader/Logo.png';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img className={styles.divLogo} src={logoForHeader} alt="logo" />
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
        <Icon iconId={Icons.HEART} className={styles.heart} />
        <Icon iconId={Icons.CART} className={styles.cart} />
        <div className={styles.union}>
          <Icon iconId={Icons.BURGER} className={styles.burger} />
        </div>
      </div>
    </header>
  );
};

export default Header;

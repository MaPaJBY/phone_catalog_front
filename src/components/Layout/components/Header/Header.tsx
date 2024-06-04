import React, { useEffect, useState } from 'react';
import { SignOutButton, SignedIn, SignedOut } from '@clerk/clerk-react';

import CartBadge from '../../../generic/Badge/Badge';
import FavoriteBadge from '../../../generic/FavoriteBadge/FavoriteBadge';
import Icon from '../../../generic/Icon/Icon';
import { Icons } from '../../../../types';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const [icon, setIcon] = useState(isNavbarOpen ? Icons.CLOSE : Icons.BURGER);

  useEffect(() => {
    setIcon(isNavbarOpen ? Icons.CLOSE : Icons.BURGER);
  }, [isNavbarOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsNavbarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <img className={styles.divLogo} src={'/img/logo.png'} alt="logo" />
      <nav
        className={`${styles.navbar} ${isNavbarOpen ? styles.navbar_active : ''}`}
      >
        <ul className={styles.navlinks}>
          <li>
            <NavLink
              onClick={() => setIsNavbarOpen(false)}
              to="/"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsNavbarOpen(false)}
              to="/phones"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Phones
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsNavbarOpen(false)}
              to="/tablets"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Tablets
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsNavbarOpen(false)}
              to="/accessories"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Accessories
            </NavLink>
          </li>
          <SignedOut>
            <li>
              <NavLink
                to="/signin"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                SignIn
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                SigneUp
              </NavLink>
            </li>
          </SignedOut>
          <SignedIn>
            <li>
              <SignOutButton>
                <span>Sign Out</span>
              </SignOutButton>
            </li>
          </SignedIn>
        </ul>
        {isNavbarOpen && (
          <>
            <div className={styles.burgerIcons}>
              <NavLink
                to="/favorites"
                className={styles.burgerIcon}
                onClick={() => setIsNavbarOpen(false)}
              >
                <Icon iconId={Icons.HEART} className={styles.heart} />
              </NavLink>
              <NavLink
                to="/cart"
                className={styles.burgerIcon}
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              >
                <Icon iconId={Icons.CART} className={styles.cart} />
              </NavLink>
            </div>
          </>
        )}
      </nav>
      <div className={styles.icons}>
        <NavLink to="/favorites">
          <Icon iconId={Icons.HEART} className={styles.heart} />
          <FavoriteBadge />
        </NavLink>
        <NavLink to="/cart">
          <Icon iconId={Icons.CART} className={styles.cart} />
          <CartBadge />
        </NavLink>
        <div
          className={styles.union}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <Icon iconId={icon} className={styles.burger} />
        </div>
      </div>
    </header>
  );
};

export default Header;

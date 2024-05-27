import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import Icon from '../Icon/Icon';
import { Icons } from '../../types';
import CartBadge from '../Badge/Badge';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    if (isMenuOpen) {
      navigate('/');
    }
  };

  return (
    <>
      <header className={styles.header}>
        <img className={styles.divLogo} src={'/img/Logo.png'} alt="logo" />
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
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
          <NavLink to="/favorites">
            <Icon iconId={Icons.HEART} className={styles.heart} />
          </NavLink>
          <NavLink to="/cart">
            <Icon iconId={Icons.CART} className={styles.cart} />
            <div className={styles.union} onClick={toggleMenu}>
              <Icon
                iconId={isMenuOpen ? Icons.CLOSE : Icons.BURGER}
                className={styles.burger}
              />
            </div>
            <CartBadge />
          </NavLink>
        </div>
      </header>
      <div className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}>
        {isMenuOpen && (
          <>
            <div className={styles.overlay_header}>
              <img
                className={styles.divLogo}
                src={'/img/Logo.png'}
                alt="logo"
              />
              <div className={styles.close} onClick={toggleMenu}>
                <Icon iconId={Icons.CLOSE} />
              </div>
            </div>
            <nav className={styles.overlayNav}>
              <ul className={styles.navlinks}>
                <li>
                  <NavLink to="/" onClick={toggleMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/phones" onClick={toggleMenu}>
                    Phones
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tablets" onClick={toggleMenu}>
                    Tablets
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/accessories" onClick={toggleMenu}>
                    Accessories
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className={styles.icons}>
              <div className={styles.heartContainer}>
                <Icon iconId={Icons.HEART} className={styles.heart} />
              </div>
              <div className={styles.cartContainer}>
                <Icon iconId={Icons.CART} className={styles.cart} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;

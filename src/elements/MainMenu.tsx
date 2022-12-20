import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LanguageSelector from '../input/LanguageSelector';
import MobileMenu from './MobileMenu';

export default function MainMenu() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const { t } = useTranslation('', { keyPrefix: 'Menu' });
  const location = useLocation();

  const logoPath = process.env.REACT_APP_LOGO_ABS_PATH;

  return (
    <nav>
      <div className="menu">
        <div className="menuLeft">
          <Link to="/" className="logo">
            <img src={logoPath} alt="Logo" />
          </Link>
        </div>
        <div className="menuRight">
          <Link to="/" className={location.pathname === '/' ? 'selected' : ''}>
            {t('home')}
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'selected' : ''}>
            {t('about')}
          </Link>
          <Link to="#" className="btn btn--primary">
            <i className="fa-regular fa-calendar-days" />
            {t('cta')}
          </Link>
          <LanguageSelector />
        </div>
        <button
          type="button"
          id="burgerBtn"
          className={`menuBurger ${burgerOpen ? 'isOpen' : 'notOpen'}`}
          onClick={toggleBurger}
        >
          <span className="burger" />
          <span className="burger" />
          <span className="burger" />
          <span className="iconLabel" />
        </button>
      </div>
      <MobileMenu isOpen={burgerOpen}>
        <Link to="/" className={location.pathname === '/' ? 'selected' : ''}>
          {t('home')}
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'selected' : ''}>
          {t('about')}
        </Link>
        <Link to="#" className="btn btn--primary">
          <i className="fa-regular fa-calendar-days" />
          {t('cta')}
        </Link>
      </MobileMenu>
    </nav>
  );
}

import React, { ReactNode } from 'react';
import LanguageSelector from '../input/LanguageSelector';

interface MobileMenuProps {
  children: ReactNode;
  isOpen: boolean;
}

export default function MobileMenu(props: MobileMenuProps) {
  return (
    <div className={`menuMobile menuMobile${props.isOpen ? '--open' : '--closed'}`}>
      {props.children}
      <div className="menuMobile__langSelector">
        <LanguageSelector />
      </div>
    </div>
  );
}

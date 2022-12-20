import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const lngs = [
    { abbr: 'fr', nativeName: 'Français' },
    { abbr: 'en', nativeName: 'English' },
  ];

  const { i18n } = useTranslation();

  return (
    <form>
      <div className="langSelector">
        <select
          defaultValue={i18n.resolvedLanguage}
          name="lang"
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {lngs.map((lng) => (
            <option key={lng.abbr} value={lng.abbr}>
              {lng.abbr}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

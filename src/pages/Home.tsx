import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';

export default function Home() {
  const { t } = useTranslation('', { keyPrefix: 'Home' });

  return (
    <main id="home">
      <Hero page="Home" imgPath="../assets/layouts/team-cover.jpg" full />
      <section className="container">{t('mainTitle')}</section>
    </main>
  );
}

import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  page: string;
  imgPath: string;
  full?: boolean;
}

export default function Hero(props: HeroProps) {
  const { page, imgPath, full } = props;
  const { t } = useTranslation('', { keyPrefix: page });

  return (
    <div
      className={`hero ${full ? 'hero--full' : 'hero--demi'}`}
      style={{ backgroundImage: `url(${imgPath})` }}
    >
      <div className="hero__content">
        <h1>{t('mainTitle')}</h1>
        <h4>{t('subtitle')}</h4>
      </div>
    </div>
  );
}

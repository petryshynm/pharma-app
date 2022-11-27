import './About.scss'

import { aboutCards } from '../../utils';
import { useTranslation } from 'react-i18next';

export const About = () => {
    const { t } = useTranslation()

    return  <section id="about_link" className="about">
        <div className="container">
            <div className="about__title">
                {t('about_title')} <span>{t('company_name')}</span>
            </div>
            <p className="about__subtitle">{t('about_paragraph-first')}</p>
            <p className="about__subtitle">{t('about_paragraph-second')}</p>
            <div className="about__cards">
                {aboutCards.map(({ label, icon }, index) => (
                    <div key={index} className="about__card card">
                        <div className="card__icon-container">{icon}</div>
                        <div className="card__title">{t(`about_${label}_title`)}</div>
                        <p className="card__subtitle">{t(`about_${label}_subtitle`)}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="about__border"/>
    </section>
}
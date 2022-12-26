import { useTranslation } from 'react-i18next';

import { aboutCards } from '../../utils';
import { AboutCard } from './AboutCard';

import './About.scss'

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
                {aboutCards.map((card, index) => (
                    <AboutCard key={index} card={card} index={index}/>
                ))}
            </div>
        </div>
        <div className="about__border"/>
    </section>
}
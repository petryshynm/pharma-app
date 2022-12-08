import { useTranslation } from 'react-i18next';

import { servicesCards } from '../../utils';

import './Services.scss';

export const Services = () => {
    const { t } = useTranslation()

    return <section className="services" id="services_link">
        <div className='services__upper-border'></div>
        <div className='container'>
            <div className='services__title'>
                {t('services_title')}<span>{t('services_title-bold')}</span>
            </div>
            <div className='services__content-wrapper'>
                <div className='services__image'>
                    <img src='./assets/1.webp' alt="service"/>
                </div>
                <div className='services__content'>
                    <p>{t('services_subtitle')}</p>
                    <div className='services__cards'>
                        {servicesCards.map(({label, icon}, index) => (
                            <div key={index} className='services__card'>
                                {icon}
                                {t(`services_${label}`)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className='services__bottom-border'></div>
    </section>
}
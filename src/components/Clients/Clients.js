import { useTranslation } from 'react-i18next';

import backgroundImage from '../../resources/images/bg6.jpg';
import arrow from '../../resources/images/arrow.png';

import { clientCards } from '../../utils';

import './Clients.scss';

export const Clients = () => {
    const {t} = useTranslation()

    return <section className="clients" style={{ backgroundImage: `url(${backgroundImage})` }} id="clients_link">
        <div className='clients__upper-border'></div>
        <div className='container'>
            <div className='clients__heading'>
                <div className='clients__title'>
                    {t('clients_title')} <span>{t('clients_title-bold')}</span>
                </div>           
                <div className='clients__subtitle'>{t('clients_subtitle')}</div>                   
            </div>
            <div className='clients__cards'>
                    {clientCards.map(({icon, label}, index) => (
                        <div key={index} className='clients__card card'>
                            <div className='card__icon'>
                                {icon}
                                {index !== clientCards.length -1 && <img src={arrow} alt="arrow"/>}
                            </div>
                            <div data-number={`0${index}`} className='card__content'>{t(`clients_${label}`)}</div>
                        </div>
                    ))}
            </div>
            
        </div>
        <div className='clients__bottom-border'></div>
    </section>
}
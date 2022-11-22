import './Clients.scss';

import backgroundImage from '../../resources/images/bg6.jpg';
import arrow from '../../resources/images/arrow.png';

import { clientCards } from '../../utils';

export const Clients = () => {
    return <section className="clients" style={{ backgroundImage: `url(${backgroundImage})` }} id="clients_link">
        <div className='clients__upper-border'></div>
        <div className='container'>
            <div className='clients__heading'>
                <div className='clients__title'>
                    Our <span>Clients</span>
                </div>           
                <div className='clients__subtitle'>
                    Our client base consists of a diverse array of pharmaceutical companies
                </div>                   
            </div>
            <div className='clients__cards'>
                    {clientCards.map(({icon, label}, index) => (
                        <div key={index} className='clients__card card'>
                            <div className='card__icon'>
                                <img src={icon} alt="card"/>
                                {index !== clientCards.length -1 && <img className='card__arrow' src={arrow} alt="arrow"/>}
                            </div>
                            <div data-number={`0${index}`} className='card__content'>{label}</div>
                        </div>
                    ))}
            </div>
            
        </div>
        <div className='clients__bottom-border'></div>
    </section>
}
import './Services.scss';

import { servicesCards } from '../../utils';

export const Services = () => {
    return <section className="services" id="services_link">
        <div className='services__upper-border'></div>
        <div className='container'>
            <div className='services__title'>
                We offer <span>Our Services</span>
            </div>
            <div className='services__content-wrapper'>
                <div className='services__image'>
                    <img src='./assets/1.jpg' alt="service"/>
                </div>
                <div className='services__content'>
                    <p>Our client base consists of a diverse array of pharmaceutical companies, as well as academic, contract pharma, private-label and government organizations from around the world, including:</p>
                    <div className='services__cards'>
                        {servicesCards.map(({label, icon}, index) => (
                            <div key={index} className='services__card'>
                                {icon}
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className='services__bottom-border'></div>
    </section>
}
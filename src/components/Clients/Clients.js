import './Clients.scss';

import backgroundImage from '../../resources/images/bg6.jpg';

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
                <div className='clients__card card'>
                    <div className='card__icon'>
                        O
                    </div>
                    <div className='card__content'>
                        <span></span>
                        Academic Pharmaceutical companies
                    </div>
                </div>
                <div className='clients__card card'>
                    <div className='card__icon'>
                        O
                    </div>
                    <div className='card__content'>
                        Academic Pharmaceutical companies
                    </div>
                </div>
                <div className='clients__card card'>
                    <div className='card__icon'>
                        O
                    </div>
                    <div className='card__content'>
                        Academic Pharmaceutical companies
                    </div>
                </div>
                <div className='clients__card card'>
                    <div className='card__icon'>
                        O
                    </div>
                    <div className='card__content'>
                        Academic Pharmaceutical companies
                    </div>
                </div>
            </div>
            
        </div>
        <div className='clients__bottom-border'></div>
    </section>
}
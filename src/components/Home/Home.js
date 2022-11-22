import './Home.scss';

import { Button } from '../ClassicButton';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import backgroundImage from '../../resources/images/bg4.jpg';

export const Home = () => {
    return  <section id="home_link" style={{ backgroundImage: `url(${backgroundImage})` }} className="home">
        <div className="home__content">
          <div className="home__title">
            WE ARE
            <div>BT PHARMA ALBANIA</div>
          </div>
          <div className="home__subtitle">
            We are a a specialty broker company for pharmaceutical and chemical manufacturers and distributors in domestic and international markets.
            </div>
            <AnchorLink href="#contact_link">
              <Button value="Get Started" className="home__button" />
            </AnchorLink>   
        </div>
        <div className="home__border"/>
    </section>
}